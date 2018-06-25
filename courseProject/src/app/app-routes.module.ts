import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesComponent } from "./recipe-book/recipes.component";
import { RecipeDetailComponent } from "./recipe-book/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./recipe-book/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-book/recipe-edit/recipe-edit.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { AuthGuard } from "./auth/auth-guard.service";

const routes: Routes = [
    // pathMatch: 'full' forces the full path to match in order to trigger the redirect
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'shopping-list', component: ShoppingListComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'recipes', component: RecipesComponent, children: [
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
    ]}
];

@NgModule({
    imports: [
        //Register Routes by configuring RouterModule
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}