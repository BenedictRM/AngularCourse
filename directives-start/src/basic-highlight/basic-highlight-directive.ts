import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elem : ElementRef) {
        
    }
    //access native element and it's style and overwrite it's background color
    ngOnInit(){
        //Accessing elements like this is generally a bad practice
        this.elem.nativeElement.style.backgroundColor = 'green';
    }
}