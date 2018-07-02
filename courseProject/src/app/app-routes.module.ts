import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router"
import { HomeComponent } from "./core/home/home.component";

const routes: Routes = [
    // pathMatch: 'full' forces the full path to match in order to trigger the redirect
    // {path: '', redirectTo: '/recipes', pathMatch: 'full'}
    {path: '', component: HomeComponent, pathMatch: 'full'},
    // Lazily load the Recipe Module
    {path: 'recipes', loadChildren: './recipe-book/recipes.module#RecipesModule' }
];

@NgModule({
    imports: [
        //Register Routes by configuring RouterModule -- preloading set for lazily loaded modules so they compile earlier
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}