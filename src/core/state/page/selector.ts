import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface ContactState {
  isLoading: boolean;
  message: string | null;
}

export const initialContactState: ContactState = {
  isLoading: false,
  message: null,
};

export const CONTACT_STATE_NAME = 'contact';

const contactStateSelector =
  createFeatureSelector<ContactState>(CONTACT_STATE_NAME);

export const IsContactLoading = createSelector(
  contactStateSelector,
  (state) => state.isLoading
);
export const getContactSuccessMessage = createSelector(
  contactStateSelector,
  (state) => state.message
);
