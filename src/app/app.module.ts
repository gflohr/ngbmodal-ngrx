import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { CounterComponent } from './counter/counter.component';
import { ResetConfirmationComponent } from './reset-confirmation/reset-confirmation.component';

@NgModule({
	declarations: [
		AppComponent,
		CounterComponent,
		ResetConfirmationComponent
	],
	imports: [
		BrowserModule,
		NgbModule,
		StoreModule.forRoot(reducers, {
			metaReducers,
			runtimeChecks: {
				strictStateImmutability: true,
				strictActionImmutability: true
			}
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
