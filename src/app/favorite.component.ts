import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'favorite',
  template: `<i class="fa" [class.fa-star-o]="!isFavorite" [class.fa-star]="isFavorite" (click)="onClick()"></i>`
})

export class FavoriteComponent {
  @Input() isFavorite = false;

  @Output() change = new EventEmitter();

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite });
  }
}
