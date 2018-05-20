import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user1Activated = false;
  user2Activated = false;

  constructor(private usersService: UsersService){}

  ngOnInit(){
    this.usersService.userActivated.subscribe(
      (active: number) => {
        active === 1 ? this.user1Activated = true : this.user2Activated = true;
      }
    );
  }
}
