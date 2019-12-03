import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as fromCounter from '../counter.reducer';

export interface AppState {
  [fromCounter.counterFeatureKey]: fromCounter.State
}

export const reducers: ActionReducerMap<AppState> = {
  [fromCounter.counterFeatureKey]: fromCounter.reducer
};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

export const getCounter = (state:AppState) => state.counter;

export const selectCounterState = createFeatureSelector<AppState, fromCounter.State>(
    fromCounter.counterFeatureKey
);

export const selectCounterCurrent = createSelector(
  getCounter,
  (state:fromCounter.State) => state.current
)

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];
