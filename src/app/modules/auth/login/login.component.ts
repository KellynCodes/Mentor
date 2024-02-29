import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/state/app/app.state';
import * as authActions from '../../../../core/state/auth/auth.action';
import * as authSelectors from '../../../../core/state/auth/auth.selector';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'learnal-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  hidePassword: boolean = true;
  loginForm!: FormGroup;
  IsLoading$ = this.store.select(authSelectors.getLoading);
  errorMessage$ = this.store.select(authSelectors.getErrorMessage);
  redirectUrl: string;

  constructor(
    private store: Store<AppState>,
    private alert: ToastrService,
    private activeRoute: ActivatedRoute
  ) {
    this.redirectUrl = this.activeRoute.snapshot.queryParams['redirectTo'];
  }

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

    this.store.dispatch(
      authActions.LoginRequest({
        model: {
          email: this.loginForm.value.email,
          password: this.loginForm.value.password,
        },
        redirectTo: this.redirectUrl,
      })
    );
  }
}
