import { ContactDto } from '../../services/contact/dtos/contact.dto';
import { createAction, props } from '@ngrx/store';

export const Contact = createAction(
  '[Contact] Contact Request.',
  props<ContactDto>()
);
export const ContactSuccess = createAction('[Contact] Contact Success.');

export const ContactFailure = createAction(
  '[Contact] Contact Failure.',
  props<any>()
);
