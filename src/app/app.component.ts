import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'asgm4-app';
  timer: number = 0;
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(firedNumber: number){
    //console.log(firedNumber)
    this.timer = firedNumber;
    
    if(firedNumber % 2 === 0){
      this.evenNumbers.push(firedNumber);
    }else {
      this.oddNumbers.push(firedNumber);
    }
  }
}
