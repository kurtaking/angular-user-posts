import { Component } from '@angular/core';

import { CourseService } from './course.service';

@Component ({
  selector: 'courses',
  templateUrl: './courses.component.html',
  providers: [
    CourseService
  ]

})


export class CoursesComponent {
  title = 'The titlt of courses page';
  courses = this.courseService.getCourses();

  constructor(
    private courseService : CourseService
  ) {}

}
