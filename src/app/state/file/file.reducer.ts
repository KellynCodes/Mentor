import { createReducer, on } from '@ngrx/store';
import * as fileActions from './file.action';
import { fileState } from './file.state';

const _fileReducer = createReducer(
  fileState,
  on(fileActions.UploadFileSuccess, (state, action) => {
    return {
      ...state,
      fileUrl: action.fileUrl,
      s3Path: action.s3Path,
      isSuccessful: action.isSuccessful,
      message: action.message,
    };
  }),

  on(fileActions.UploadImageFailure, (state, action) => {
    return {
      ...state,
      isSuccessful: action.isSuccessful,
      message: action.message,
      fileUrl: action.fileUrl,
      s3Path: action.s3Path,
    };
  })
);

const _fileUploadReducer = createReducer(
  { file: null, IsLoading: false },
  on(fileActions.ResetUploadState, (state, action) => {
    return {
      ...state,
      file: null,
      IsLoading: action.IsLoading,
    };
  })
);

export function fileReducer(state: any, action: any) {
  return _fileReducer(state, action);
}

export function fileUploadReducer(state: any, action: any) {
  return _fileUploadReducer(state, action);
}
