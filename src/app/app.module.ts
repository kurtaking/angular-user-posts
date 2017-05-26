import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { CoursesComponent } from './courses.component';
import { AuthorComponent} from './author.component';
import { MessagesComponent } from './messages.component'
import {AutoGrowDirective} from "./auto-grow.directive";
import {FavoriteComponent} from "./favorite.component";

@NgModule({
  imports:      [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorComponent,
    MessagesComponent,
    AutoGrowDirective,
    FavoriteComponent
  ],
  bootstrap:    [
    AppComponent
  ]
})

export class AppModule { }
