import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  projectForm: FormGroup;
  invalidProjectNames = ['Test', 'test'];

  ngOnInit(){
    this.projectForm = new FormGroup({
      // 'projectName': new FormControl(null, [Validators.required, this.validateProjectName.bind(this)]),
      'projectName': new FormControl(null, [Validators.required], this.validateAsyncProjectName.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('critical')
    });
  }

  onSubmit(){
    console.log(this.projectForm);
  }

  //Sync check
  validateProjectName(control: FormControl): {[s: string]: boolean}{
    if(this.invalidProjectNames.indexOf(control.value) !== -1)
      return {'invalidName': true};
    
    return null;
  }

  //Async check
  validateAsyncProjectName(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(this.invalidProjectNames.indexOf(control.value) !== -1)
          resolve({'invalidNameAsync': true});
        else
          resolve(null);
      }, 1500)
    })
    return promise;
  }
}
