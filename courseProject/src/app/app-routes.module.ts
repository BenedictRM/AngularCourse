import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { AppComponent } from "./app.component";
import { RecipesComponent } from "./recipe-book/recipes.component";

const routes: Routes = [
    // pathMatch: 'full' forces the full path to match in order to trigger the redirect
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'shopping-list', component: ShoppingListComponent},
    {path: 'recipes', component: RecipesComponent}
];

@NgModule({
    imports: [
        //Register Routes by configuring RouterModule
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}