import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chronometre',
  templateUrl: './chronometre.component.html',
  styleUrls: ['./chronometre.component.scss']
})
export class ChronometreComponent implements OnInit {

  timer = 0;
  hour = 0;
  minute = 0;
  second = 0;
  pauseDisable = true;
  startDisable = false;
  resetDisable = true;

  constructor() {
  }

  ngOnInit(): void {
  }


  startChronometre(): void {

    this.startDisable = true;
    this.pauseDisable = false;
    this.resetDisable = true;

    this.timer = setInterval(() => {
        if (this.second < 59) {
          this.second += 1;
        } else {
          this.second = 0;
          if (this.minute < 59) {
            this.minute += 1;
          } else {
            this.minute = 0;
            this.hour += 1;
          }
        }
    }, 1000)
  }

  pauseChronometre(): void {

    clearInterval(this.timer);

    this.startDisable = false;
    this.pauseDisable = true;
    this.resetDisable = false;
  }

  resetChronometre(): void {

    clearInterval(this.timer);

    this.pauseDisable = true;
    this.resetDisable = true;

    this.second = 0;
    this.minute = 0;
    this.hour = 0;
  }
}
