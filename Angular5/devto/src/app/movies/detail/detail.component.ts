import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink} from '@angular/router';
import { MoviesService } from "../movies.service";


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private film : any;

  constructor(
    private route           : ActivatedRoute,
    private router          : Router,
    private moviesService   : MoviesService
  ) {}

  ngOnInit() {

    let idMovie = this.route.snapshot.params['id'];

    this.film = this.moviesService.getMovie(idMovie)
      .then(movie => {this.film = movie;
        if(this.film == undefined) {
          this.router.navigate(['/404']);
        }
      });
  }
}
