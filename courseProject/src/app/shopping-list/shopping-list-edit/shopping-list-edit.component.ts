import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
    selector: 'shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styles: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit{

    @ViewChild('nameInput') nameInput : ElementRef;
    @ViewChild('amountInput') amountInput : ElementRef;
    @Output() itemAdded = new EventEmitter<Ingredient>();


    constructor(){
    }

    ngOnInit(){
    }

    onAddItem(){
        this.itemAdded.emit(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
    }
}