import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm : FormGroup;
  forbiddenUserNames = ['Chris', 'Anna'];

  constructor(){
  }

  ngOnInit(){
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'username' : new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails,
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    // track value changes
    // this.signupForm.valueChanges.subscribe(
    //   (value) => {
    //     console.log(value)
    //   }
    // );

    //Track status changes
    this.signupForm.statusChanges.subscribe(
      (status) => {
        console.log('got ' + status)
      }
    );
    //Will initialize all values to these
    this.signupForm.setValue({
      'userData' : {
        'username' : 'Max',
        'email': 'max@yahoo.com',
      },
      'gender': 'male',
      'hobbies': []
    });
    //Only set username
    this.signupForm.patchValue({
      'userData' : {
        'username' : 'Anna'
      }
    });
  }

  onSubmit(){
    console.log(this.signupForm);
  }

  onAddHobby(){
    console.log('called')
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean}{
    // !== -1 means that we did not find it, therefore it is valid, if 1 then it is in the list and invalid
    if(this.forbiddenUserNames.indexOf(control.value) !== -1)
      return {'forbiddenUsername': true};
    // ALWAYS RETURN NULL IF DATA VALID, NEVER FALSE
    return null;
  }

  // Example Async validator
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'test@test.com')
          resolve({'emailForbidden': true})
        else
          resolve(null);
      } ,1500);
    });
    return promise;
  }
}
