import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') userForm : NgForm;
  defaultSkill = 'basic';

  onSubmit(){
    console.log(this.userForm.value.userGroup.email);
    console.log(this.userForm.value.userGroup.password);
    console.log(this.userForm.value.skill);
  }
}
