import { Injectable } from '@angular/core';
import {Movie} from "./movie";
import {Http} from "@angular/http";

@Injectable()
export class MoviesService {
  private listMovies : Array<any>;

  constructor(private http : Http) {
   /* this.listMovies = [
      {
        id                  : 1,
        title               : "La Haine",
        director            : "Mathieu Kassovitz",
        actors              : "Vincent Cassel, Hubert Koundé",
        type                : "drame",
        release             : new Date('1997/05/02'),
        note                : Math.round(4.9),
        content             : '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, incidunt minima perferendis reprehenderit ullam voluptatum. Aliquam consequuntur eum excepturi explicabo hic possimus rem, reprehenderit ullam. Excepturi itaque libero reiciendis tempora.</p>',
        link               : "https://i.ebayimg.com/images/g/ZcQAAOSw1S9Wcbwi/s-l300.jpg"
      },
      {
        id                  : 2,
        title              : "Titanic",
        director           : "James Cameron",
        actors             : "Leonardo DiCaprio, Kate Winslet",
        type               : "drame",
        release            : new Date('1999/06/22'),
        note               : Math.round(3.7),
        content            : '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, incidunt minima perferendis reprehenderit ullam voluptatum. Aliquam consequuntur eum excepturi explicabo hic possimus rem, reprehenderit ullam. Excepturi itaque libero reiciendis tempora.</p>',
        link               : "https://media.senscritique.com/media/000004715818/source_big/Titanic.jpg"

      },
      {
        id                 : 3,
        title              : "Batman vs Superman",
        director           : "Zack Snyder",
        actors             : "Ben Affleck, Henry Cavill",
        type               : "Super-heros",
        release            : new Date('2016/03/22'),
        note               : Math.round(3.4),
        content            : '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, incidunt minima perferendis reprehenderit ullam voluptatum. Aliquam consequuntur eum excepturi explicabo hic possimus rem, reprehenderit ullam. Excepturi itaque libero reiciendis tempora.</p>',
        link               : "https://images-na.ssl-images-amazon.com/images/I/51pv7-uFubL.jpg"
      },
      {
        id                 : 4,
        title              : "Zootopia",
        director           : "Byron Howard",
        actors             : "Rich Moore , Jared Bush",
        type               : "Animation",
        release            : new Date('2016/02/03'),
        note               : Math.round(3.6),
        content             : '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, incidunt minima perferendis reprehenderit ullam voluptatum. Aliquam consequuntur eum excepturi explicabo hic possimus rem, reprehenderit ullam. Excepturi itaque libero reiciendis tempora.</p>',
        link                : "https://images-na.ssl-images-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_UX182_CR0,0,182,268_AL_.jpg"
      },
      {
        id                 : 6,
        title              : "Rogue One",
        director           : "Gareth Edwards",
        actors             : "Felicia Jones , Diego Luna",
        type               : "Science-Fiction",
        release            : new Date('2016/04/23'),
        note               : Math.round(2.2),
        content             : '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, incidunt minima perferendis reprehenderit ullam voluptatum. Aliquam consequuntur eum excepturi explicabo hic possimus rem, reprehenderit ullam. Excepturi itaque libero reiciendis tempora.</p>',
        link               : "https://images-na.ssl-images-amazon.com/images/I/91cHWS%2BXaoL._SY550_.jpg"
      },
      {
        id                 : 5,
        title              : "Une vie fantastique",
        director           : "Matt Ross",
        actors             : "Franck Langella",
        type               : "Comédie dramatique",
        release            : new Date('2015/12/02'),
        note               : Math.round(4.3),
        content              : '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, incidunt minima perferendis reprehenderit ullam voluptatum. Aliquam consequuntur eum excepturi explicabo hic possimus rem, reprehenderit ullam. Excepturi itaque libero reiciendis tempora.</p>',
        link                : "https://img3.cdn.cinoche.com/images/651721c2c96a6885647e0d343bfcf10c.jpg"
      },
    ];*/
  }

  getAll(){
    return this.http.get( 'http://localhost:3000/movie')
      .toPromise()
      .then(response => response.json())
      .catch(err => console.log(err))
  }

  getMovie(idMovie){
    return this.http.get( 'http://localhost:3000/movie/'+idMovie)
      .toPromise()
      .then(response => response.json())
      .catch(err => console.log(err))
  }

  /*getMovie(idMovie){
    for ( let i=0 ;i<this.listMovies.length ; i++) {
      if(idMovie == this.listMovies[i].id) {
        return this.listMovies[i];
      }
    }
  }*/

  addMovie(movie :Movie){
    return this.http.post( 'http://localhost:3000/movie/', movie)
      .toPromise()
      .then(response => response.json())
  }
}
