import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // 
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 4000);
  }

  ngOnInit() {
  }

  onCreateServer() {    // html click method will call this function
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  // this is event binding. taking an event or in this case the input the user types,
  // and 

}
