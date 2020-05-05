import { BrowserModule }       from '@angular/platform-browser';
import { NgModule }            from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import { MoviesModule}         from "./movies/movies.module";
import { AppComponent }        from './app.component';
import { NotFoundComponent }   from './not-found/not-found.component';
import { MoviesService }       from "./movies/movies.service";
import { InscriptionComponent }from './user/inscription/inscription.component';
import { ConnexionComponent }  from './user/connexion/connexion.component';
import { UserModule }          from "./user/user.module";

const routes : Routes = [
  { path :  '**'     , component : NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    InscriptionComponent,
    ConnexionComponent,
  ],
  imports: [
    BrowserModule, MoviesModule, UserModule ,RouterModule.forRoot( routes )
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
