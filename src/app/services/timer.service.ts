import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, interval, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  constructor() {}

  public time$ = new BehaviorSubject(0);

  private _timerInterval = 1000;
  private _elapsedTime = 0;
  private _time$: Observable<number> = interval(this._timerInterval);
  private _subscription?: Subscription;

  get isRunning() {
    return Boolean(this._subscription);
  }

  start() {
    if (this._subscription) return;
    this._subscription = this._time$
      .pipe(map((t) => (t + 1) * this._timerInterval + this._elapsedTime))
      .subscribe(this.time$);
  }

  stop() {
    this._subscription?.unsubscribe();
    this._subscription = undefined;
    this.time$.next(0);
    this._elapsedTime = 0;
  }

  wait() {
    this._elapsedTime = this.time$.getValue();
    this._subscription?.unsubscribe();
    this._subscription = undefined;
  }

  reset() {
    this.stop();
    this.start();
  }
}
