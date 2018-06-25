import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipe-book/recipe.service';
import { Recipe } from '../recipe-book/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  createPostRequest() {
    const token = this.authService.getToken();

    return this.http.put('https://ng-recipe-book-c82df.firebaseio.com/data.json?auth=' + token, this.recipeService.getRecipes());
  }

  createGetRequest() {
    const token = this.authService.getToken();

    this.http.get('https://ng-recipe-book-c82df.firebaseio.com/data.json?auth=' + token)
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
