import { Component } from '@angular/core'; // must import Component class

@Component({
  selector: 'app-server', // html tag for component to be referenced by
  templateUrl: './server.component.html' // name of html file where component will be held
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}