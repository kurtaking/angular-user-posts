import { Component } from '@angular/core';

@Component({
  selector: 'favorite',
  template: `<i class="fa" [class.fa-star-o]="!isFavorite" [class.fa-star]="isFavorite" (click)="onClick()"></i>`
})

export class FavoriteComponent {
  isFavorite = false;

  onClick() {
    this.isFavorite = !this.isFavorite;
  }
}
