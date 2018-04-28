import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Simply a Test', 'https://miami.eat24hours.com/files/cuisines/v4/thai.jpg')
  ];
  @Output('recipeSelected') recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelect(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
