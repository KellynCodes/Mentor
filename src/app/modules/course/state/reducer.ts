import { Action, createReducer, on } from '@ngrx/store';
import { initialCourseState } from './selector';
import * as courseActions from './action';

const _courseReducer = createReducer(
  initialCourseState,
  on(courseActions.CreateCourse, (state, action) => {
    console.log('called');
    return {
      ...state,
      courses: state.courses,
      IsLoading: action.IsLoading,
    };
  }),

  on(courseActions.UpdateCourse, (state, action) => {
    console.log('called');

    return {
      ...state,
      courses: state.courses,
      IsLoading: action.IsLoading,
    };
  }),

  on(courseActions.LoadCourse, (state, action) => {
    console.log('called');

    return {
      ...state,
      courses: state.courses,
      IsLoading: action.IsLoading,
    };
  }),

  on(courseActions.GetCourse, (state, action) => {
    console.log('called');

    return {
      ...state,
      courses: state.courses,
      IsLoading: action.IsLoading,
    };
  }),

  on(courseActions.LoadCourseFailure, (state, action) => {
    console.log('called');

    return {
      ...state,
      courses: state.courses,
      IsLoading: action.IsLoading,
      errorMessage: action.errorMessage,
    };
  }),

  on(courseActions.ResetCourseFetchState, (state, action) => {
    console.log('called');

    return {
      ...state,
      courses: null,
      IsLoading: false,
      errorMessage: null,
    };
  }),

  on(courseActions.LoadCourseSuccess, (state, action) => {
    console.log('called');

    return {
      ...state,
      courses: action?.courses,
      IsLoading: false,
      errorMessage: null,
    };
  }),

  on(courseActions.CreateCourseSuccess, (state, action) => {
    console.log('called');

    let course = { ...action.course };
    return {
      ...state,
      courses: [...state.courses!, course],
      IsLoading: false,
      errorMessage: null,
    };
  }),

  on(courseActions.UpdateCourseSuccess, (state, action) => {
    console.log('called');

    const updatedCourse = state.courses!.map((course) => {
      return action.course.id == course.id ? action.course : course;
    });
    return {
      ...state,
      courses: updatedCourse,
      IsLoading: false,
    };
  }),

  on(courseActions.DeleteCourse, (state, action) => {
    console.log('called');

    const deletedCourse = state.courses!.filter((course) => {
      return course.id !== action.id;
    });

    return {
      ...state,
      courses: deletedCourse,
      IsLoading: false,
    };
  }),

  on(courseActions.CreateCourseFailure, (state, { error }) => {
    console.log('called');

    return {
      ...state,
      IsLoading: false,
      errorMessage: error.message,
    };
  }),

  on(courseActions.UpdateCourseFailure, (state, { error }) => {
    return {
      ...state,
      IsLoading: false,
      errorMessage: error.message,
    };
  }),

  on(courseActions.DeleteCourseFailure, (state, { error }) => {
    console.log('called');

    return {
      ...state,
      IsLoading: false,
      errorMessage: error.message,
    };
  })
);

export function courseReducer(state: any, action: Action) {
  return _courseReducer(state, action);
}
