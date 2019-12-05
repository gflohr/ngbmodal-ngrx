import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-reset-confirmation',
	templateUrl: './reset-confirmation.component.html',
	styleUrls: ['./reset-confirmation.component.css']
})
export class ResetConfirmationComponent {

	constructor(
		public activeModal: NgbActiveModal
	) { }

}
