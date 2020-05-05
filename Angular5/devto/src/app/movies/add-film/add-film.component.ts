import { Component, OnInit } from '@angular/core';
import { Movie }              from '../movie'
import { MoviesService }         from '../movies.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {
  private movie : Movie;
  private type  : Array<string>;
  constructor( private moviesService : MoviesService,
               private router        : Router) {}

  ngOnInit() {
    this.movie = new Movie();
    this.type = ['Drame', 'Comedie', 'Action', 'Fantastique', 'Sci-fi'];
  }

  addmovie() {
    this.moviesService.addMovie(this.movie)
      .then(movie => {
        console.log('Film Ajouté');
          this.router.navigate(['films'])
      });
  }
}
