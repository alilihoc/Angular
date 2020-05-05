import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from "@angular/forms";
import { RouterModule, Routes,} from "@angular/router";
import {InscriptionComponent} from "./inscription/inscription.component";
import {BrowserModule} from "@angular/platform-browser";
import {ConnexionComponent} from "./connexion/connexion.component";

const routes : Routes = [
  {path : 'inscription' , component : InscriptionComponent},
  {path : 'connexion'   , component : ConnexionComponent}
];


@NgModule({
  imports: [
    CommonModule, BrowserModule, RouterModule.forChild( routes ), FormsModule
  ],
  declarations: [
    InscriptionComponent,
    ConnexionComponent
  ]
})
export class UserModule { }

