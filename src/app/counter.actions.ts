import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
export const resetConfirmation
        = createAction('[Counter Component] Reset Confirmation');
export const resetConfirmationDismissed
        = createAction('[Counter Component] Reset Confirmation Dismissed');
