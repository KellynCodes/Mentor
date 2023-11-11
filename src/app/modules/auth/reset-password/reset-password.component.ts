import { AuthService } from './../../../services/auth/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/app/app.state';
import * as authActions from '../state/auth/auth.action';
import * as authSelectors from '../state/auth/auth.selector';

@Component({
  selector: 'learnal-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css',
})
export class ResetPasswordComponent {
  resetPwdForm!: FormGroup;
  errorMessage: string | null = null;
  IsLoading$ = this.store.select(authSelectors.getLoading);
  errorMessage$ = this.store.select(authSelectors.getErrorMessage);
  hidePassword!: boolean;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.resetPwdForm = new FormGroup(
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
      this.errorMessage = 'All the fields are required.';
      return;
    }
    const loginCredentials = {
      email: this.resetPwdForm.value.email,
      password: this.resetPwdForm.value.password,
      newPassword: this.resetPwdForm.value.confirmPassword,
    };
  }
}
