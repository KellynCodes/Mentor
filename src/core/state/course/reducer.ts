import { Action, createReducer, on } from '@ngrx/store';
import { initialCourseState } from './selector';
import * as courseActions from './action';

const _courseReducer = createReducer(
  initialCourseState,
  on(courseActions.CreateCourse, (state, action) => {
    return {
      ...state,
      courses: state.courses,
      IsLoading: action.IsLoading,
    };
  }),

  on(courseActions.UpdateCourse, (state, action) => {
    return {
      ...state,
      courses: state.courses,
      IsLoading: action.IsLoading,
    };
  }),

  on(courseActions.LoadCourse, (state, action) => {
    return {
      ...state,
      courses: state.courses,
      IsLoading: action.IsLoading,
    };
  }),

  on(courseActions.LoadCourseSuccess, (state, action) => {
    return {
      ...state,
      courses: action?.courses,
      IsLoading: false,
      errorMessage: null,
    };
  }),

  on(courseActions.LoadUserCourse, (state, action) => {
    return {
      ...state,
      courses: state.courses,
      IsLoading: action.IsLoading,
    };
  }),

  on(courseActions.LoadUserCourseSuccess, (state, action) => {
    return {
      ...state,
      courses: action?.courses,
      IsLoading: false,
      errorMessage: null,
    };
  }),

  on(courseActions.GetCourse, (state, action) => {
    return {
      ...state,
      courses: state.courses,
      IsLoading: action.IsLoading,
    };
  }),

  on(courseActions.LoadCourseFailure, (state, action) => {
    return {
      ...state,
      courses: state.courses,
      IsLoading: action.IsLoading,
      errorMessage: action.errorMessage,
    };
  }),

  on(courseActions.ResetCourseFetchState, (state, action) => {
    return {
      ...state,
      courses: null,
      IsLoading: false,
      errorMessage: null,
    };
  }),

  on(courseActions.CreateCourseSuccess, (state, action) => {
    let course = { ...action.course };
    return {
      ...state,
      courses: [...state.courses!, course],
      IsLoading: false,
      errorMessage: null,
    };
  }),

  on(courseActions.UpdateCourseSuccess, (state, action) => {
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
    const deletedCourse = state.courses!.filter((course) => {
      return course.id != action.courseId;
    });

    return {
      ...state,
      courses: deletedCourse,
      IsLoading: false,
    };
  }),

  on(courseActions.CreateCourseFailure, (state, { error }) => {
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
    return {
      ...state,
      IsLoading: false,
      errorMessage: error.message,
    };
  }),

  on(courseActions.BuyCourse, (state) => {
    return {
      ...state,
      IsLoading: true,
    };
  }),

  on(courseActions.BuyCourseSuccess, (state) => {
    return {
      ...state,
      IsLoading: false,
    };
  }),

  on(courseActions.BuyCourseFailure, (state) => {
    return {
      ...state,
      IsLoading: false,
    };
  }),

  on(courseActions.LikeCourse, (state) => {
    return {
      ...state,
      subLoading: true,
    };
  }),

  on(courseActions.LikeCourseSuccess, (state) => {
    return {
      ...state,
      subLoading: false,
    };
  }),

  on(courseActions.LikeCourseFailure, (state) => {
    return {
      ...state,
      subLoading: false,
    };
  })
);

export function courseReducer(state: any, action: Action) {
  return _courseReducer(state, action);
}
