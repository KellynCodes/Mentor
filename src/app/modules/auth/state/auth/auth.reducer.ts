import { Action, createReducer, on } from '@ngrx/store';
import { LoginSuccessDto } from '../../../../services/auth/Dto/LoginSuccessDto';
import { VerifyEmailDto } from '../../../../services/auth/Dto/verify-email.dto';
import * as authActions from './auth.action';
import { authState, verifyTokenState } from './auth.state';
import { HttpResponse } from '../../../../data/Dto/shared/http.response.dto';

const _authReducer = createReducer(
  authState,
  on(authActions.LoginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
      IsLoading: false,
      errorMessage: null,
      accessToken: action.accessToken,
      expiryTimeStamp: action.expiryTimeStamp,
      refreshToken: action.refreshToken,
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

  on(authActions.AuthFailure, (state, { error }) => {
    return {
      ...state,
      message: error.message,
      statusCode: error.statusCode,
      data: null,
    };
  }),

  on(authActions.setAuthLoadingSpinner, (state, { IsLoading }) => {
    return {
      ...state,
      IsLoading: IsLoading,
      accessToken: null,
      expiryTimeStamp: null,
      refreshToken: null,
      user: null,
    };
  }),

  on(authActions.setAuthErrorMessage, (state, { errorMessage }) => {
    return {
      ...state,
      errorMessage: errorMessage,
      IsLoading: false,
      accessToken: null,
      expiryTimeStamp: null,
      refreshToken: null,
      user: null,
    };
  })
);

export function authReducer(
  state: LoginSuccessDto | undefined,
  action: Action
) {
  return _authReducer(state, action);
}

//Verification email state

const _verificationEmailReducer = createReducer(
  verifyTokenState,
  on(authActions.VerifyEmailRequest, (state, { model }) => {
    return {
      ...state,
      message: model.message,
      isSuccessful: model.isSuccessful,
      data: model.data,
    };
  }),
  on(authActions.VerifyEmailSuccess, (state, { model }) => {
    return {
      ...state,
      message: model.message,
      isSuccessful: model.isSuccessful,
      data: model.data,
    };
  }),

  on(authActions.VerifyEmailFailure, (state, { model }) => {
    return {
      ...state,
      message: model.message,
      isSuccessful: model.isSuccessful,
      data: {
        isLoading: false,
        email: null,
        otp: null,
      },
    };
  }),

  on(authActions.StopLoading, (state, { model }) => {
    return {
      ...state,
      message: model.message,
      isSuccessful: model.isSuccessful,
      data: model.data,
    };
  })
);

export function verificationEmailReducer(
  state: HttpResponse<VerifyEmailDto> | undefined,
  action: Action
) {
  return _verificationEmailReducer(state, action);
}
