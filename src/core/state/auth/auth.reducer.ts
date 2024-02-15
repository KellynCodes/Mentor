import { Action, createReducer, on } from '@ngrx/store';
import { LoginSuccessDto } from '../../services/auth/Dto/LoginSuccessDto';
import * as authActions from './auth.action';
import { authState } from './auth.selector';

const _authReducer = createReducer(
  authState,
  on(authActions.LoginRequest, (state, action) => {
    return { ...state, isLoading: true };
  }),
  on(authActions.LoginSuccess, (state, { response }) => {
    if (response == null) {
      return { ...state, IsLoading: false };
    }
    return {
      ...state,
      user: response.user,
      IsLoading: false,
      errorMessage: null,
      accessToken: response.accessToken,
      expiryTimeStamp: response.expiryTimeStamp,
      refreshToken: response.refreshToken,
    };
  }),

  on(authActions.GetUserSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
      errorMessage: null,
      IsLoading: false,
      accessToken: action.accessToken,
      expiryTimeStamp: action.expiryTimeStamp,
      refreshToken: action.refreshToken,
    };
  }),

  on(authActions.LogoutSuccess, (state) => {
    return {
      ...state,
      user: null,
      accessToken: null,
      expiryTimeStamp: null,
      refreshToken: null,
    };
  }),

  on(authActions.ForgotPasswordRequest, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),

  on(authActions.ForgotPasswordSuccess, (state, action) => {
    return {
      ...state,
      successMessage: action.message,
      isLoading: false,
      isSuccessful: action.isSuccessful,
    };
  }),

  on(authActions.ResetPasswordRequest, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),

  on(authActions.ResetPasswordSuccess, (state, action) => {
    return {
      ...state,
      successMessage: action.message,
      isLoading: false,
      isSuccessful: action.isSuccessful,
    };
  }),

  on(authActions.VerifyEmailRequest, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(authActions.VerifyEmailSuccess, (state, { message }) => {
    return {
      ...state,
      successMessage: `${message}. \n Navigating you to login page.`,
      isSuccessful: true,
    };
  }),

  on(authActions.ResendOtpRequest, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),

  on(authActions.ForgotPasswordRequest, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),

  on(authActions.VerifyEmailFailure, (state, { model }) => {
    return {
      ...state,
      message: model.message,
      isSuccessful: false,
      isLoading: false,
    };
  }),

  on(authActions.AuthFailure, (state, { error }) => {
    return {
      ...state,
      errorMessage: error.message,
    };
  }),

  on(authActions.setAuthLoadingSpinner, (state, action) => {
    return {
      ...state,
      IsLoading: false,
      accessToken: null,
      expiryTimeStamp: null,
      refreshToken: null,
      user: null,
    };
  }),

  on(authActions.setAuthErrorMessage, (state, error) => {
    return {
      ...state,
      errorMessage: error.errorMessage,
      isLoading: false,
    };
  }),

  on(authActions.RegistrationSuccess, (state, { response }) => {
    return {
      ...state,
      successMessage: response.message,
      isSuccessful: response.isSuccessful,
    };
  }),

  on(authActions.RegistrationFailure, (state, { error }) => {
    return {
      ...state,
      errorMessage: error.message,
      isSuccessful: false,
      isLoading: false,
    };
  }),

  on(authActions.RegistrationRequest, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),

  on(authActions.ResetState, (state, action) => {
    return {
      ...state,
      errorMessage: null,
      successMessage: null,
      isLoading: false,
    };
  })
);

export function authReducer(
  state: LoginSuccessDto | undefined,
  action: Action
) {
  return _authReducer(state, action);
}
