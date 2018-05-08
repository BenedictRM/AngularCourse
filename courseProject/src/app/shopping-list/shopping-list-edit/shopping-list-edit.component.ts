import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styles: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit{

    @ViewChild('nameInput') nameInput : ElementRef;
    @ViewChild('amountInput') amountInput : ElementRef;

    constructor(private shoppingListService: ShoppingListService){
    }

    ngOnInit(){
    }

    onAddItem(){
        this.shoppingListService.addIngredient(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
    }
}