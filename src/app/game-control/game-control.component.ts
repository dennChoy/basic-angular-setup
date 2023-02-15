import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  //Output allows to use it outside the component. Where the component is called, in this case is app component.html
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber: number = 0;


  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000)
  }

  onPauseGame() {
    clearInterval(this.interval);
  }
}
