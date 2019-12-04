import * as CounterActions from './counter.actions';
import { on, createReducer } from '@ngrx/store';

export const counterFeatureKey =	'counter';

export interface State {
	current: number;
}

export const initialState: State = {
	current: 0
};

export const reducer = createReducer(
	initialState,
	on(CounterActions.increment, (state) => ({ current: state.current + 1})),
	on(CounterActions.decrement, (state) => ({ current: state.current - 1})),
	on(CounterActions.reset, () => initialState),
);

