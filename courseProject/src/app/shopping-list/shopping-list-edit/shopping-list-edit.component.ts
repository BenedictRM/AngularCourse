import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styles: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit{
    accessible: string = 'true';

    constructor(){
        
    }

    ngOnInit(){

    }
}