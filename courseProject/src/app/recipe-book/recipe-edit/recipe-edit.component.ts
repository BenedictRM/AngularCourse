import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private recipeService: RecipeService, 
    private dataStorageService: DataStorageService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] ? true : false;
          this.initForm();
        }
      );
  }

  onSubmit(){
    if(this.editMode)
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    else  
      this.recipeService.addRecipe(this.recipeForm.value)
    
      this.router.navigate(['../'], {relativeTo: this.route})
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  onAddIngredient(){
    //Add new control to array of form controls -- ts required us to cast this to the FormArray type to be able to use
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  onDeleteIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onSave(){
    this.dataStorageService.createPostRequest()
    .subscribe(
      (response) => {console.log(response)},
      (error) => {console.log(error)}
    );
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  private initForm(){
    let recipe = new Recipe('', '', '', []);
    let recipeIngredients = new FormArray([]);

    if(this.editMode){
      recipe = this.recipeService.getRecipe(this.id);
      if(recipe.ingredients)
        for(let ingr of recipe.ingredients)
          //Need to push a form group because we need to control the name and amount fields of the ingredient
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingr.name, Validators.required),
              'amount': new FormControl(ingr.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]), 
            })
          );
    }
      
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipe.name, Validators.required),
      'imagePath': new FormControl(recipe.imagePath, Validators.required),
      'description': new FormControl(recipe.description, Validators.required),
      'ingredients': recipeIngredients
    });
  }
}
