import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'shopping-list',
    templateUrl: './shopping-list.component.html',
    styles: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
    accessible: string = 'true';

    constructor() { }

    ngOnInit(){
    }
}