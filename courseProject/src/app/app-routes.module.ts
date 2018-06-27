import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"
import { SignupComponent } from "./auth/signup/signup.component";
import { SigninComponent } from "./auth/signin/signin.component";

const routes: Routes = [
    // pathMatch: 'full' forces the full path to match in order to trigger the redirect
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent}
];

@NgModule({
    imports: [
        //Register Routes by configuring RouterModule
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}