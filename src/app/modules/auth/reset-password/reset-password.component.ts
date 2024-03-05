import { AuthService } from './../../../../core/services/auth/auth.service';
import { AppState } from './../../../../core/state/app/app.state';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as authActions from '../../../../core/state/auth/auth.action';
import * as authSelectors from '../../../../core/state/auth/auth.selector';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'learnal-reset-password',
  templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent {
  resetPwdForm: FormGroup = new FormGroup(
    {
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    },
    { validators: this.authService.mustMatch('password', 'confirmPassword') }
  );

  IsLoading$ = this.store.select(authSelectors.getLoading);
  errorMessage$ = this.store.select(authSelectors.getErrorMessage);
  hidePassword!: boolean;
  otp: string = '';

  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private alert: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const queryParams = this.route.snapshot.queryParams;
    this.otp = queryParams['otp'];
  }

  controlHasError(control: string, error: string): boolean {
    if (
      this.resetPwdForm?.get(control)?.touched &&
      this.resetPwdForm?.get(control)?.hasError(error)
    ) {
      return true;
    }
    return false;
  }

  resetPassword(): void {
    if (!this.resetPwdForm.valid) {
      this.alert.error(
        'All the fields are required.',
        'Model state not valid.'
      );
      return;
    }
    this.store.dispatch(
      authActions.ResetPasswordRequest({
        model: {
          email: this.resetPwdForm.value.email,
          otp: `${this.otp}`,
          password: this.resetPwdForm.value.password,
          confirmPassword: this.resetPwdForm.value.confirmPassword,
        },
      })
    );
  }
}
