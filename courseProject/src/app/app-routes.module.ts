import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    // pathMatch: 'full' forces the full path to match in order to trigger the redirect
    // {path: '', redirectTo: '/recipes', pathMatch: 'full'}
    {path: '', component: HomeComponent, pathMatch: 'full'},
    // Lazily load the Recipe Module
    {path: 'recipes', loadChildren: './recipe-book/recipes.module#RecipesModule' }
];

@NgModule({
    imports: [
        //Register Routes by configuring RouterModule
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}