import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styles: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
    @ViewChild('f') slForm: NgForm; 
    subscription: Subscription;
    editedIndex: number;
    editedItem: Ingredient;
    editMode = false;

    constructor(private shoppingListService: ShoppingListService){
    }

    ngOnInit(){
        this.subscription = this.shoppingListService.startedEditing.subscribe(
            (index: number) => {
                this.editedIndex = index;
                this.editMode = true;
                this.editedItem = this.shoppingListService.getIngredient(index)
                this.slForm.setValue({
                    name: this.editedItem.name,
                    amount: this.editedItem.amount
                })
            }
        );
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    onSubmit(form: NgForm){
        const value = form.value;
        const ingredient = new Ingredient(value.name, value.amount);
        if(this.editMode)
            this.shoppingListService.updateIngredient(this.editedIndex, ingredient);
        else
            this.shoppingListService.addIngredient(ingredient);

        //clear inputs on enter
        this.slForm.reset();
        this.editMode = false;
    }

    onDelete(){
        this.shoppingListService.deleteIngredient(this.editedIndex);
        this.onClear();
    }

    onClear(){
        this.slForm.reset();
        this.editMode = false;
        this.editedIndex = null;
        this.editedItem = null;
    }
}