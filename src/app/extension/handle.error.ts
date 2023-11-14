import { Store } from '@ngrx/store';
import { setErrorMessage } from './../state/shared/shared.action';
import { ErrorHandler, Injectable } from '@angular/core';
import { AppState } from '../state/app/app.state';

@Injectable({ providedIn: 'root' })
export class HandleGlobalError implements ErrorHandler {
  constructor(private store: Store<AppState>) {}
  handleError(error: any) {
    this.store.dispatch(
      setErrorMessage({
        message: error,
        isSuccessful: false,
      })
    );
  }
}
