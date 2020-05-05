import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { RouterModule, Routes} from "@angular/router";

import { ListMoviesComponent } from './list-movies/list-movies.component';
import { MovieHoverDirective } from './movie-hover.directive';
import { FilmStarsPipe }       from './film-stars.pipe';
import { DetailComponent }     from './detail/detail.component';
import { BrowserModule }       from "@angular/platform-browser";
import { AddFilmComponent }    from './add-film/add-film.component';
import { FormsModule }         from "@angular/forms";
import { HttpModule}           from "@angular/http";

const routes : Routes = [
  { path :   ''        , component : ListMoviesComponent},
  { path : 'films'     , component : ListMoviesComponent},
  { path : 'films/add' , component : AddFilmComponent},
  { path : 'film/:id'  , component : DetailComponent},

];

@NgModule({
  imports: [
    CommonModule, BrowserModule, RouterModule.forChild( routes ),FormsModule, HttpModule
  ],
  declarations: [
    ListMoviesComponent,
    DetailComponent,
    MovieHoverDirective,
    FilmStarsPipe,
    AddFilmComponent,
  ]
})
export class MoviesModule { }
