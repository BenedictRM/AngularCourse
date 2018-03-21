import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html' ,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = 'No Server Was Created';
  serverName = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];

  constructor() { 
    setTimeout( () => {
      this.allowNewServer = false;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server Was Created and Name is: ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }

}
