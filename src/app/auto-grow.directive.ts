import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive ({
  selector: '[myAutoGrow]',
  host: {
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()'
  }
})

export class AutoGrowDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  onFocus() {
    this.renderer.setStyle(this.el.nativeElement, 'width', '200px');
  }

  onBlur() {
    this.renderer.setStyle(this.el.nativeElement, 'width', '120px');
  }

}
