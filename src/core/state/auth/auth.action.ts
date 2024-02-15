import { LoginSuccessDto } from './../../services/auth/Dto/LoginSuccessDto';
import { ResetPasswordDto } from '../../services/auth/Dto/reset-password.dto';
import { VerifyEmailDto } from '../../services/auth/Dto/verify-email.dto';
import { createAction, props } from '@ngrx/store';
import { LoginDto } from '../../services/auth/Dto/login.dto';
import { HttpResponse } from '../../../core/types/dto/http.response.dto';

//login actions
export const LoginRequest = createAction(
  '[Auth] Login Request',
  props<{ model: LoginDto; redirectTo: string | null }>()
);

export const LoginSuccess = createAction(
  '[Auth] Login Success',
  props<{ response: LoginSuccessDto| null; redirectTo: string | null }>()
);

export const GetUserSuccess = createAction(
  '[Auth] Get User Success',
  props<LoginSuccessDto>()
);

export const AuthFailure = createAction(
  '[Auth] auth failure',
  props<{ error: any }>()
);

export const setAuthLoadingSpinner = createAction('[Auth] set loading spinner');

export const setAuthErrorMessage = createAction(
  '[Auth] set error message',
  props<{ errorMessage: string | null }>()
);

export const LogoutSuccess = createAction('[Auth] Logout User');

//signup actions
export const RegistrationRequest = createAction(
  '[SignUp] Request',
  props<{ formData: FormData; email: string }>()
);

export const RegistrationSuccess = createAction(
  '[SignUp] Request Success',
  props<{ response: HttpResponse; email: string }>()
);

export const RegistrationFailure = createAction(
  '[SignUp] Request Failure',
  props<{ error: any }>()
);

//verify email actions
export const VerifyEmailRequest = createAction(
  '[Email] Verification',
  props<{ model: VerifyEmailDto }>()
);

export const VerifyEmailSuccess = createAction(
  '[Email] Verification Success',
  props<{ model: VerifyEmailDto; message: string }>()
);

export const VerifyEmailFailure = createAction(
  '[Email] Verification Failure',
  props<{ model: any }>()
);

export const ResendOtpRequest = createAction(
  '[Email] Resend Otp',
  props<{ email: string }>()
);

export const ForgotPasswordRequest = createAction(
  '[Email] Forgot Password',
  props<{ email: string }>()
);

export const ForgotPasswordSuccess = createAction(
  '[Email] Forgot Password Success',
  props<{ message: string; isSuccessful: boolean }>()
);

export const ResetPasswordRequest = createAction(
  '[Email] Forgot Password',
  props<{ model: ResetPasswordDto }>()
);

export const ResetPasswordSuccess = createAction(
  '[Email] Forgot Password Success',
  props<{ message: string; isSuccessful: boolean }>()
);

export const ResetState = createAction('[Email] Stop Loading');
