import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {   //Importare le funzionalità nella nostra applicazione
 FormsModule,
 ReactiveFormsModule
} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 
import { AppComponent } from './app.component';
import { F1Component } from './f1/f1.component';
import { RiceviComponent } from './ricevi/ricevi.component';

@NgModule({
  declarations: [
    AppComponent,
    F1Component,
    RiceviComponent
  ],
  imports: [
    BrowserModule, FormsModule,  //Anche qui
   ReactiveFormsModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
