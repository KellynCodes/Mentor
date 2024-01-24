import { Component } from '@angular/core';
import { AppState } from '../../../state/app/app.state';
import * as authActions from '../state/auth/auth.action';
import * as authSelectors from '../state/auth/auth.selector';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
@Component({
  selector: 'learnal-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  IsLoading$ = this.store.select(authSelectors.getLoading);
  message$ = this.store.select(authSelectors.message);
  isSuccessful$ = this.store.select(authSelectors.isVerifySuccessful);
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
