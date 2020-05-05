import { Component, OnInit } from '@angular/core';
import { MoviesService }     from "../movies.service";
import { Router }            from "@angular/router";

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
  private listMovies : any;
  constructor(
    private moviesService : MoviesService,
    private router        : Router
  ) { }

  ngOnInit() {
    this.listMovies = this.moviesService.getAll()
                 .then(movie => {this.listMovies = movie});
  }

  clickFilm ($titre){
    alert('Vous avez séléctionné : ' + $titre)
  }

}
