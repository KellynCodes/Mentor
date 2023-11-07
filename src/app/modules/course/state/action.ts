import { PaginationQueryDto } from './../../../data/Dto/shared/request.query.dto';
import { CourseResponseDto } from './../../../services/course/Dto/CourseResponseDto';
import { createAction, props } from '@ngrx/store';
import { Operation } from 'fast-json-patch';

export const LoadCourse = createAction(
  '[Course] Load Course Success.',
  props<{ query: PaginationQueryDto; IsLoading: boolean }>()
);

export const LoadCourseFailure = createAction(
  '[Course] Load Course Failure',
  props<{courses:  CourseResponseDto[] | null, IsLoading: boolean, errorMessage: string | null}>()
)

export const LoadCourseSuccess = createAction(
  '[Course] Load Course Success.',
  props<{ courses: CourseResponseDto[] }>()
);

export const CreateCourse = createAction(
  '[Course] Create Course.',
  props<{ course: FormData; IsLoading: boolean }>()
);

export const CreateCourseSuccess = createAction(
  '[Course] create Course Success.',
  props<{ course: CourseResponseDto }>()
);

export const CreateCourseFailure = createAction(
  '[Course] create Course Failure.',
  props<{ error: any }>()
);

export const UpdateCourse = createAction(
  '[Course] Update Course.',
  props<{ course: FormData; IsLoading: boolean }>()
);

export const UpdateCoursePath = createAction(
  '[Course] Update Course.',
  props<{ course: Operation[]; IsLoading: boolean }>()
);

export const UpdateCourseSuccess = createAction(
  '[Course] Update Course Success.',
  props<{ course: CourseResponseDto }>()
);

export const UpdateCourseFailure = createAction(
  '[Course] Update Course Failure.',
  props<{ error: any }>()
);

export const DeleteCourse = createAction(
  '[Course] Update Course Success.',
  props<{ id: string; IsLoading: boolean }>()
);

export const DeleteCourseFailure = createAction(
  '[Course] Update Course Success.',
  props<{ error: any }>()
);
