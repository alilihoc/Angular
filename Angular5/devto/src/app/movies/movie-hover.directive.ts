import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[movieHover]'
})
export class MovieHoverDirective {

  constructor(private el : ElementRef) {}

  @HostListener('mouseenter') onMouseEnter(){
    this.setBackground('#693535');
    this.el.nativeElement.style.color = '#f5f5f5';
    this.el.nativeElement.style.boxShadow = '0px 1px 6px 4px #ff8d8d';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBackground(null);
    this.el.nativeElement.style.color = null;
    this.el.nativeElement.style.boxShadow = null;
  }

  private setBackground(color){
    this.el.nativeElement.style.backgroundColor = color
  }
}
