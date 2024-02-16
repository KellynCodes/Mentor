import { Role } from 'src/core/types/enum/role';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, finalize, map, of, tap } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { JwtService } from '../../services/utils/jwt.service';
import { AppState } from '../app/app.state';
import * as authActions from './auth.action';
import * as verificationActions from './auth.action';
import { setAuthErrorMessage } from './auth.action';
import { ToastrService } from 'ngx-toastr';
import { DOCUMENT } from '@angular/common';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthEffect {
  window = inject(DOCUMENT).defaultView;
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private authService: AuthService,
    private router: Router,
    private jwtService: JwtService,
    private alert: ToastrService
  ) {}

  // Auth request
  loginRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.LoginRequest),
      exhaustMap((action) =>
        this.authService.Login(action.model).pipe(
          map((res) => {
            const user = this.jwtService.decodeJwtToken(res.data!);
            if (res.data) {
              res.data.user = user;
            }

            if (user?.role == Role.ADMIN) {
              this.alert.info(
                `Hello ${user.unique_name[0]} we are navigating you to the admin dashboard, you can login from there.`
              );
              setTimeout(() => {
                this.window?.open(environment.adminDashboardLink, '_blank');
              }, 3500);
              return authActions.LoginSuccess({
                response: null,
                redirectTo: '/',
              });
            }
            return authActions.LoginSuccess({
              response: res.data!,
              redirectTo: action.redirectTo,
            });
          }),
          catchError((error) => {
            return of(authActions.AuthFailure({ error: error.error }));
          })
        )
      )
    )
  );

  //Auth request success
  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.LoginSuccess),
        map((res) => {
          if (res.redirectTo) {
            this.router.navigateByUrl(res.redirectTo);
            return;
          }
          this.router.navigateByUrl('/dashboard');
        })
      ),
    { dispatch: false }
  );

  logoutSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.LogoutSuccess),
        map((res) => {
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );

  // Auth request failures
  loginFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.AuthFailure),
        tap(({ error }) => {
          this.store.dispatch(
            setAuthErrorMessage({ errorMessage: error.message })
          );
          setTimeout(() => {
            this.store.dispatch(setAuthErrorMessage({ errorMessage: null }));
          }, 5000);
        })
      ),
    { dispatch: false }
  );

  //signup effects
  SignUpRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.RegistrationRequest),
      exhaustMap((model) => {
        return this.authService.signUp(model.formData).pipe(
          map((response) => {
            return authActions.RegistrationSuccess({
              response: response,
              email: model.email,
            });
          }),
          catchError((error) => {
            return of(authActions.RegistrationFailure({ error: error.error }));
          }),
          finalize(() => {
            setTimeout(() => {
              this.store.dispatch(authActions.ResetState());
            }, 5000);
          })
        );
      })
    )
  );

  SignUpSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.RegistrationSuccess),
        map((res) => {
          this.alert.info(
            'Enter the token sent to your email to verify your account.',
            'Account creation successful'
          );
          this.router.navigateByUrl(`/auth/verify-email?email=${res.email}`);
        })
      ),
    { dispatch: false }
  );

  //verify effects

  verifyEmailEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(verificationActions.VerifyEmailRequest),
      exhaustMap((action) =>
        this.authService.verifyEmail(action.model!).pipe(
          map((res) => {
            return verificationActions.VerifyEmailSuccess({
              model: res.data!,
              message: res.message,
            });
          }),
          catchError((error) => {
            return of(
              verificationActions.VerifyEmailFailure({ model: error.error })
            );
          }),
          finalize(() => {
            setTimeout(() => {
              this.store.dispatch(verificationActions.ResetState());
            }, 3000);
          })
        )
      )
    )
  );

  ResendOtpEmailEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(verificationActions.ResendOtpRequest),
      exhaustMap((action) =>
        this.authService.resendOtp(action.email).pipe(
          map((res) => {
            return verificationActions.ResetState();
          }),
          catchError((error) => {
            return of(
              verificationActions.VerifyEmailFailure({ model: error.error })
            );
          }),
          finalize(() => {
            setTimeout(() => {
              this.store.dispatch(verificationActions.ResetState());
            }, 3000);
          })
        )
      )
    )
  );

  ForgotPasswordEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(verificationActions.ForgotPasswordRequest),
      exhaustMap((action) =>
        this.authService.forgotPassword(action.email).pipe(
          map((res) => {
            return verificationActions.ForgotPasswordSuccess({
              message: res.message,
              isSuccessful: res.isSuccessful,
            });
          }),
          catchError((error) => {
            return of(verificationActions.AuthFailure({ error: error.error }));
          }),
          finalize(() => {
            setTimeout(() => {
              this.store.dispatch(verificationActions.ResetState());
            }, 3000);
          })
        )
      )
    )
  );

  ResetPasswordEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(verificationActions.ResetPasswordRequest),
      exhaustMap((action) =>
        this.authService.resetPassword(action.model).pipe(
          map((res) => {
            return verificationActions.ResetPasswordSuccess({
              message: res.message,
              isSuccessful: res.isSuccessful,
            });
          }),
          catchError((error) => {
            return of(verificationActions.AuthFailure({ error: error.error }));
          }),
          finalize(() => {
            setTimeout(() => {
              this.store.dispatch(verificationActions.ResetState());
            }, 3000);
          })
        )
      )
    )
  );

  VerificationSuccessful$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(verificationActions.VerifyEmailSuccess),
        map((data) => {
          this.alert.info(
            'Enter your email and password to login.',
            'Email Verification Successful'
          );
          this.router.navigateByUrl('/auth/login');
        })
      ),
    { dispatch: false }
  );
}
