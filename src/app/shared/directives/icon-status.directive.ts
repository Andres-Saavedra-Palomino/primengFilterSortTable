import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[pngIconStatus]',
})
export class IconStatusDirective implements OnInit {
  @Input() statusId!: number;
  iconClasses: string[] = [
    'pi pi-check-circle',
    'pi pi-times-circle',
    'pi pi-clock',
    'pi pi-lock',
  ];
  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    const status = this.elementRef.nativeElement;
    status.innerHTML = `<i class="${this.iconClasses[this.statusId - 1]}"></i>`;
  }
}
