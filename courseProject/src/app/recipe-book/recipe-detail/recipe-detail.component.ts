import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // @Input() recipeSelected : Recipe;
  recipeSelected : Recipe;
  id : number;

  constructor(private recipeService: RecipeService, 
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    // this.recipeSelected = this.recipeService.getRecipe(this.route.snapshot.params['id']);
    this.route.params.subscribe(
      (params: Params) => {
        //Cast id from string to number
        this.id = +params.id; 
        this.recipeSelected = this.recipeService.getRecipe(this.id);
      }
    )
  }

  onAddToShoppingList(){
    this.recipeService.addToShoppingList(this.recipeSelected.ingredients);
  }

  onEditRecipe(){
    // this.router.navigate(['edit'], {relativeTo: this.route});
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
}
