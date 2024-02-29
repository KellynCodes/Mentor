import { Component } from '@angular/core';
import { AppState } from '../../../../core/state/app/app.state';
import * as authActions from '../../../../core/state/auth/auth.action';
import * as authSelectors from '../../../../core/state/auth/auth.selector';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
@Component({
  selector: 'learnal-forgot-password',
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent {
  IsLoading$ = this.store.select(authSelectors.getLoading);
  errorMessage$ = this.store.select(authSelectors.getErrorMessage);
  successMessage$ = this.store.select(authSelectors.successMessage);
  isSuccessful$ = this.store.select(authSelectors.isSuccessful);
  email: string = '';
  constructor(private store: Store<AppState>, private alert: ToastrService) {}

  onSubmit(): void {
    if (!this.email) {
      this.alert.error(
        'Email is required. Please provide your email address',
        'Error'
      );
      return;
    }
    this.store.dispatch(
      authActions.ForgotPasswordRequest({ email: this.email })
    );
  }
}
