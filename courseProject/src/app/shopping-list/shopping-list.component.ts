import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
    selector: 'shopping-list',
    templateUrl: './shopping-list.component.html',
    styles: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
    ingredients : Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    constructor() { }

    ngOnInit(){
    }

    onItemAdded($event){
        this.ingredients.push($event);
    }
}