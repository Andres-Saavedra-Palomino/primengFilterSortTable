import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[pngTableHeaderTheme]',
})
export class TableHeaderThemeDirective {
  constructor(private elementRef: ElementRef) {
    const theader = this.elementRef.nativeElement;

    theader.classList.add('mystyle');
  }
}
