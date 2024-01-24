import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoginDto } from '../../../services/auth/Dto/login.dto';
import { AppState } from '../../../state/app/app.state';
import * as authActions from '../state/auth/auth.action';
import * as authSelectors from '../state/auth/auth.selector';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'learnal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private store: Store<AppState>, private alert: ToastrService) {}
  hidePassword: boolean = true;
  loginForm!: FormGroup;
  IsLoading$ = this.store.select(authSelectors.getLoading);
  errorMessage$ = this.store.select(authSelectors.getErrorMessage);

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  controlHasError(control: string, errorName: string): boolean | undefined {
    if (!this.loginForm.dirty) {
      return;
    }
    return (
      this.loginForm?.get(control)?.touched &&
      this.loginForm?.get(control)?.hasError(errorName)
    );
  }

  Login(): void {
    if (!this.loginForm.valid) {
      this.alert.error('All the fields are required.');
      return;
    }
    const loginCredentials: LoginDto = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    this.store.dispatch(
      authActions.setAuthLoadingSpinner({
        IsLoading: true,
        errorMessage: null,
        expiryTimeStamp: null,
        accessToken: null,
        refreshToken: null,
        user: null,
      })
    );
    this.store.dispatch(authActions.LoginRequest({ model: loginCredentials }));
  }
}
