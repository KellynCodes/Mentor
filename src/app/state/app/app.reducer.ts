import { COURSE_STATE_NAME } from '../../modules/course/state/selector';
import { routerReducer } from '@ngrx/router-store';
import { sharedReducer } from '../shared/shared.reducer';
import { SHARED_STATE_NAME } from '../shared/shared.selector';
import {
  AUTH_STATE_NAME,
  VERIFY_EMAIL_STATE_NAME,
} from '../../modules/auth/state/auth/auth.selector';
import {
  authReducer,
  verificationEmailReducer,
} from '../../modules/auth/state/auth/auth.reducer';
import { SIGNUP_STATE_NAME } from '../../modules/auth/state/signup/signup.selector';
import { signUpReducer } from '../../modules/auth/state/signup/signup.reducer';
import { FILE_STATE_NAME, FILE_STATE_UPLOAD_NAME } from '../file/file.selector';
import { fileReducer, fileUploadReducer } from '../file/file.reducer';
import { courseReducer } from '../../modules/course/state/reducer';

export const appReducer = {
  [AUTH_STATE_NAME]: authReducer,
  [VERIFY_EMAIL_STATE_NAME]: verificationEmailReducer,
  [SIGNUP_STATE_NAME]: signUpReducer,
  [COURSE_STATE_NAME]: courseReducer,
  [SHARED_STATE_NAME]: sharedReducer,
  [FILE_STATE_NAME]: fileReducer,
  [FILE_STATE_UPLOAD_NAME]: fileUploadReducer,
  router: routerReducer,
};
