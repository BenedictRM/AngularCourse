import { Input, Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = ' blue';
  //On the element on which this sits access the style property and then sub property bg color and set string to that property
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elem: ElementRef, private renderer: Renderer2) { 
  }

  ngOnInit(){
    // this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor;//initialize here so that input colors work on init
  }

  //All events are available through HostListener
  @HostListener('mouseenter') mouseEnter(eventData: Event){
    // this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }; 
  
  @HostListener('mouseleave') mouseLeave(eventData: Event){
    // this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  };
}
