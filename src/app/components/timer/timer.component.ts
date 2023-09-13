import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TimerService } from 'src/app/services/timer.service';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent {
  constructor(public timerService: TimerService) {}

  private _clickTimeout = 300;
  private _clickedTime = 0;

  startStop() {
    if (this.timerService.isRunning) {
      this.timerService.stop();
    } else {
      this.timerService.start();
    }
  }

  wait() {
    const currentTime = Date.now();
    if (currentTime - this._clickedTime <= this._clickTimeout) {
      this.timerService.wait();
    }
    this._clickedTime = currentTime;
  }

  reset() {
    this.timerService.reset();
  }
}
