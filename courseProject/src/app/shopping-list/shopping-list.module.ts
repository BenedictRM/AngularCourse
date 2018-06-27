import { NgModule } from "@angular/core";
import { FormsModule }   from '@angular/forms';
import { ShoppingListEditComponent } from "./shopping-list-edit/shopping-list-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { CommonModule } from "@angular/common";
import { ShoppingListRouting } from "./shopping-list-routing.module";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingListEditComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ShoppingListRouting
    ]
})
export class ShoppingListModule{}