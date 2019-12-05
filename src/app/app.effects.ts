import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap } from 'rxjs/operators';

import * as CounterActions from './counter.actions';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResetConfirmationComponent } from './reset-confirmation/reset-confirmation.component';

@Injectable()
export class AppEffects {
	constructor(
		private actions$: Actions,
		private modalService: NgbModal
	) {}

	runDialog = content => {
		const modalRef = this.modalService.open(content, { centered: true });

		return modalRef.result;
	};

	resetConfirmation$ = createEffect(() => this.actions$.pipe(
		ofType(CounterActions.resetConfirmation),
		exhaustMap(() => this.runDialog(ResetConfirmationComponent)),
		map(() => CounterActions.reset())
	));
}
