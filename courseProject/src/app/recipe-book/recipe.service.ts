import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Test Recipe', 
            'Simply a Test', 
            'https://miami.eat24hours.com/files/cuisines/v4/thai.jpg',
            [
                new Ingredient('Lettuce', 1),
                new Ingredient('Flour', 1)
            ]
        )
    ];

    constructor(private shoppingListService: ShoppingListService){}

    getRecipes(){
        //slice returns a shallow copy of the array
        return this.recipes.slice();
    }

    addToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}