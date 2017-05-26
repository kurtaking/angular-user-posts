import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})

export class AppComponent  {
  title = 'An example Angular App with Courses, Authors, and Messages';
  writtenByAuthor = 'Kurt King';
  courseUrl: 'https://www.udemy.com/angular-2-tutorial-for-beginners/learn/v4/overview';
}
