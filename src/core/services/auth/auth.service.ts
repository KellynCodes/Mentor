import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpResponse } from '../../../core/types/dto/http.response.dto';
import * as authActions from '../../../core/state/auth/auth.action';
import { AppState } from '../../state/app/app.state';
import { LoginSuccessDto } from './Dto/LoginSuccessDto';
import { LoginDto } from './Dto/login.dto';
import { VerifyEmailDto } from './Dto/verify-email.dto';
import { BrowserApiService } from '../utils/browser.api.service';
import { ResetPasswordDto } from './Dto/reset-password.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
    private browserApiService: BrowserApiService
  ) {}

  Login(model: LoginDto): Observable<HttpResponse<LoginSuccessDto>> {
    if (model == null) {
      throw new Error('model value cannot be null');
    }
    return this.http.post<HttpResponse<LoginSuccessDto>>('auth/sign-in', model);
  }

  signUp(model: FormData): Observable<HttpResponse> {
    if (model == null) {
      throw new Error('model value cannot be null');
    }
    return this.http.post<HttpResponse>('auth/sign-up', model);
  }

  verifyEmail(model: VerifyEmailDto): Observable<HttpResponse<VerifyEmailDto>> {
    return this.http.post<HttpResponse<VerifyEmailDto>>(
      'auth/verify-email',
      model
    );
  }

  resendOtp(email: string): Observable<HttpResponse> {
    return this.http.post<HttpResponse>('auth/verify-email-otp', {
      email: email,
    });
  }

  forgotPassword(email: string): Observable<HttpResponse> {
    return this.http.post<HttpResponse>('auth/forgot-password-otp', {
      email: email,
    });
  }

  resetPassword(model: ResetPasswordDto) {
    return this.http.post<HttpResponse>('auth/reset-password', model);
  }

  logout(): void {
    this.browserApiService.removeItem('authUser');
    this.store.dispatch(authActions.LogoutSuccess());
  }

  mustMatch(controlName: string, matchingControlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const formGroup = control as FormGroup;
      if (!formGroup.controls) {
        return null;
      }

      const controlToMatch = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (!controlToMatch || !matchingControl) {
        return null;
      }

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return null;
      }

      if (controlToMatch.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
        return { mustMatch: true };
      } else {
        matchingControl.setErrors(null);
        return null;
      }
    };
  }

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value: string = control.value || '';
      const upperCaseCharacters = /[A-Z]+/g;
      const lowerCaseCharacters = /[a-z]+/g;
      const numberCharacters = /[0-9]+/g;
      const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
      if (!upperCaseCharacters.test(value)) {
        return { passwordUppercase: true };
      }
      if (!lowerCaseCharacters.test(value)) {
        return { passwordLowercase: true };
      }
      if (!numberCharacters.test(value)) {
        return { passwordNumber: true };
      }
      if (!specialCharacters.test(value)) {
        return { passwordSpecial: true };
      }
      return null;
    };
  }
}
