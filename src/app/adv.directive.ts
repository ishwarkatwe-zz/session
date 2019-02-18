import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appAdv]'
})
export class AdvDirective {

  constructor(private el: ElementRef) {
    console.log('called**');
    el.nativeElement.style.background = 'blue';
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.el.nativeElement.style.background = 'yellow';
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.el.nativeElement.style.background = 'red';
  }

}
