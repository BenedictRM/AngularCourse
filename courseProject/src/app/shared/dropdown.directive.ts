import { Directive, OnInit, HostBinding, HostListener } from "@angular/core";

@Directive({
    //square brackets make this an attribute selector
    selector: '[appDropdown]'
})
//Attribute Directive
export class DropdownDirective implements OnInit {
    //implement a method that listens to clicks and dynamically attach css to elem
    //we will attach the 'open' css class dynamically

    @HostBinding('class.open') isOpen: boolean;

    constructor(){
        
    }

    ngOnInit(){
        // console.log('nginit called')
        this.isOpen = false;
    }

    @HostListener('click') onClick(){
        this.isOpen = !this.isOpen;
        // console.log(this.isOpen);
    }; 

}