import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState, selectCounterCurrent } from '../reducers';

import * as CounterActions from '../counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter$ = this.store.pipe(select(selectCounterCurrent));

  constructor(
    private store: Store<AppState>
  ) {}

  onIncrement() {
    this.store.dispatch(CounterActions.increment());
  }

  onDecrement() {
    this.store.dispatch(CounterActions.decrement());
  }

  onReset() {
    this.store.dispatch(CounterActions.reset());
  }
}
