import {Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable} from 'rxjs';

@Injectable()
export class SocketService {
  constructor(private socket: Socket) {
    this.socket.on('view', (data) => {
      console.log(data);
    });
  }


  receiveUpdates(): Observable<string> {
    this.socket.emit('liveticker');
    return this.socket.fromEvent('liveticker');
  }

  getViews(): Observable<number> {
    return this.socket.fromEvent('views');
  }

}


