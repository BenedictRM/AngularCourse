import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(){
    firebase.initializeApp({
      //copied from firebase.com -> web setup
      apiKey: "AIzaSyCeUyVxN9SWxc36rb92UbEdhJB_QVYDIzk",
      authDomain: "ng-recipe-book-c82df.firebaseapp.com"
    })
  }
}
