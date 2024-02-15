import { Store } from '@ngrx/store';
import { setErrorMessage } from './../state/shared/shared.action';
import { ErrorHandler } from '@angular/core';
import { AppState } from '../state/app/app.state';

export class HandleGlobalError implements ErrorHandler {
  constructor(private store: Store<AppState>) {}
  handleError(error: string) {
    if (error != null && error === typeof 'string') {
      this.store.dispatch(
        setErrorMessage({
          message: error,
          isSuccessful: false,
        })
      );
    } else {
      console.log(error);
    }
  }
}
