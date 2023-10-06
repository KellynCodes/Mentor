import { createReducer, on } from '@ngrx/store';
import { signUpState } from './signup.state';
import * as singUpActions from './signup.action';

export const _signUpReducer = createReducer(
  signUpState,
  on(singUpActions.RegistrationSuccess, (state, action) => {
    return {
      ...state,
      message: action.message,
      isSuccessful: action.isSuccessful,
      data: action.data,
    };
  }),

  on(singUpActions.RegistrationFailure, (state, { error }) => {
    return {
      ...state,
      message: error.message,
      isSuccessful: false,
      data: null,
    };
  }),

  on(singUpActions.RegistrationFired, (state, action) => {
    return {
      ...state,
      message: action.message,
      isSuccessful: action.isSuccessful,
      data: action.data,
    };
  })
);

export function signUpReducer(state: any, action: any) {
  return _signUpReducer(state, action);
}
