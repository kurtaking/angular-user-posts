import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { CoursesComponent } from './courses.component';
import { AuthorComponent} from './author.component';

@NgModule({
  imports:      [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorComponent
  ],
  bootstrap:    [
    AppComponent
  ]
})

export class AppModule { }
