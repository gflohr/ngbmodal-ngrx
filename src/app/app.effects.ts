import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';

import * as CounterActions from './counter.actions';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResetConfirmationComponent } from './reset-confirmation/reset-confirmation.component';
import { of, from } from 'rxjs';

@Injectable()
export class AppEffects {
	constructor(
		private actions$: Actions,
		private modalService: NgbModal
	) {}

	runDialog = (content: any) => {
		const modalRef = this.modalService.open(content, {
			backdrop: false,
			centered: false
		});

		return from(modalRef.result);
	};

	resetConfirmation$ = createEffect(() => this.actions$.pipe(
		ofType(CounterActions.resetConfirmation),
		exhaustMap(() => this.runDialog(ResetConfirmationComponent).pipe(
			map(() => CounterActions.reset()),
			catchError(() => of(CounterActions.resetConfirmationDismiss()))
		))
	));
}
