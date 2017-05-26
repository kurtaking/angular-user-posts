import { Component } from '@angular/core';

import {AuthorService} from './author.service';

@Component({
  selector: 'authors',
  templateUrl: './author.component.html',
  providers : [
    AuthorService
  ]
})

export class AuthorComponent {
  title = 'Title for the authors section';
  authors = this.authorService.getAuthors();

  constructor(
    private authorService : AuthorService,
  ) {}

}
