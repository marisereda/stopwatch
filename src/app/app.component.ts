import { Component } from '@angular/core';
import { TimerComponent } from './components/timer/timer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TimerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
