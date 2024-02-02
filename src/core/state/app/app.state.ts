import { CONTACT_STATE_NAME, ContactState } from '../page/selector';
import { RouterReducerState } from '@ngrx/router-store';
import { LoginSuccessDto } from '../../services/auth/Dto/LoginSuccessDto';
import { SHARED_STATE_NAME } from '../shared/shared.selector';
import { SharedState } from '../shared/shared.state';
import { UploadFileResponseDto } from '../../services/file/Dto/UploadFileResponseDto';
import { FILE_STATE_NAME, FILE_STATE_UPLOAD_NAME } from '../file/file.selector';
import { COURSE_STATE_NAME, CourseState } from '../course/selector';
import { AUTH_STATE_NAME } from '../auth/auth.selector';

export interface AppState {
  [AUTH_STATE_NAME]: LoginSuccessDto;
  [COURSE_STATE_NAME]: CourseState;
  [FILE_STATE_NAME]: UploadFileResponseDto;
  [FILE_STATE_UPLOAD_NAME]: {
    file: FormData;
    userId: string;
    IsLoading: boolean;
  };
  [CONTACT_STATE_NAME]: ContactState;
  [SHARED_STATE_NAME]: SharedState;
  router: RouterReducerState;
}
