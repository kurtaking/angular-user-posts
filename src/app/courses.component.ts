import { Component } from '@angular/core';

import { CourseService } from './course.service';
import {AutoGrowDirective} from "./auto-grow.directive";

@Component ({
  selector: 'courses',
  templateUrl: './courses.component.html',
  providers: [
    CourseService
  ],
})


export class CoursesComponent {
  title = 'The title of courses section';
  courses = this.courseService.getCourses();

  constructor(
    private courseService : CourseService
  ) {}

}
