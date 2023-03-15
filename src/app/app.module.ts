import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { CounterComponent } from './counter/counter.component';
import { ResetConfirmationComponent } from './reset-confirmation/reset-confirmation.component';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';

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
		}),
		EffectsModule.forRoot([AppEffects])
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
