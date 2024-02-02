import { routerReducer } from '@ngrx/router-store';
import { sharedReducer } from '../shared/shared.reducer';
import { SHARED_STATE_NAME } from '../shared/shared.selector';
import { FILE_STATE_NAME, FILE_STATE_UPLOAD_NAME } from '../file/file.selector';
import { fileReducer, fileUploadReducer } from '../file/file.reducer';
import { contactReducer } from '../page/reducer';
import { CONTACT_STATE_NAME } from '../page/selector';
import { authReducer } from '../auth/auth.reducer';
import { AUTH_STATE_NAME } from '../auth/auth.selector';
import { courseReducer } from '../course/reducer';
import { COURSE_STATE_NAME } from '../course/selector';

export const appReducer = {
  [AUTH_STATE_NAME]: authReducer,
  [COURSE_STATE_NAME]: courseReducer,
  [CONTACT_STATE_NAME]: contactReducer,
  [SHARED_STATE_NAME]: sharedReducer,
  [FILE_STATE_NAME]: fileReducer,
  [FILE_STATE_UPLOAD_NAME]: fileUploadReducer,
  router: routerReducer,
};
