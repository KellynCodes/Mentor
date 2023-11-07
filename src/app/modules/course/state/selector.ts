import { CourseResponseDto } from './../../../services/course/Dto/CourseResponseDto';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const COURSE_STATE_NAME = 'course';

export interface CourseState {
  courses: CourseResponseDto[] | null;
  IsLoading: boolean;
  errorMessage: string | null;
}

export const initialCourseState: CourseState = {
  courses: null,
  IsLoading: false,
  errorMessage: null,
};

export const CourseStateSelector =
  createFeatureSelector<CourseState>(COURSE_STATE_NAME);

export const getCourse = createSelector(
  CourseStateSelector,
  (state) => state.courses
);

export const IsCourseLoading = createSelector(
  CourseStateSelector,
  (state) => state.IsLoading
);

export const errorMessage = createSelector(
  CourseStateSelector,
  (state) => state.errorMessage
);
