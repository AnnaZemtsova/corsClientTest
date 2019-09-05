import {Component, OnInit} from '@angular/core';
import {SocketService} from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'corsAngular';
  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.receiveUpdates().subscribe((tickerMessage: string) => {
      console.log('Receiving update:', tickerMessage);
    });
  }

}
