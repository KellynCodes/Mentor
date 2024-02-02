import { Action, createReducer, on } from '@ngrx/store';
import { ContactState, initialContactState } from './selector';
import * as contactAction from './action';

const _contactReducer = createReducer(
  initialContactState,
  on(contactAction.Contact, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(contactAction.ContactSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(contactAction.ContactFailure, (state, action) => {
    return {
      ...state,
      isLoading: false,
      message: action.message,
    };
  })
);

export function contactReducer(
  state: ContactState | undefined,
  action: Action
) {
  return _contactReducer(state!, action);
}
