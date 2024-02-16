import {
  BuyCourseRequest,
  BuyCourseResponse,
} from './../../services/course/Dto/buy-course.dto';
import { HttpResponse } from '../../../core/types/dto/http.response.dto';
import { CourseResponseDto } from './../../services/course/Dto/course-response.dto';
import { PaginationQueryDto } from './../../types/dto/request.query.dto';
import { createAction, props } from '@ngrx/store';
import { Operation } from 'fast-json-patch';

export const LoadCourse = createAction(
  '[Course] Load Course.',
  props<{ query: PaginationQueryDto | null; IsLoading: boolean }>()
);

export const LoadCourseSuccess = createAction(
  '[Course] Load Course Success.',
  props<{ courses: CourseResponseDto[] }>()
);

export const LoadUserCourse = createAction(
  '[Course] Load User Course.',
  props<{ query: PaginationQueryDto | null; IsLoading: boolean }>()
);

export const LoadUserCourseSuccess = createAction(
  '[Course] Load User Course Success.',
  props<{ courses: CourseResponseDto[] }>()
);

export const GetCourse = createAction(
  '[Course] Get Course.',
  props<{ courseId: string; IsLoading: boolean }>()
);

export const LoadCourseFailure = createAction(
  '[Course] Load Course Failure',
  props<{
    courses: CourseResponseDto[] | null;
    IsLoading: boolean;
    errorMessage: string | any | null;
  }>()
);

export const ResetCourseFetchState = createAction(
  '[Course] Load Course State Reset'
);

export const GetCourseSuccess = createAction(
  '[Course] Get Course Success.',
  props<{ course: CourseResponseDto }>()
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
  '[Course] Delete Course.',
  props<{ courseId: string }>()
);
export const DeleteCourseSuccess = createAction(
  '[Course] Delete Course Success.'
);

export const DeleteCourseFailure = createAction(
  '[Course] Delete Course Failure.',
  props<{ error: any }>()
);

export const LikeCourse = createAction(
  '[Course] Like Course',
  props<{ email: string; courseId: string }>()
);
export const LikeCourseSuccess = createAction(
  '[Course] Like Course Success',
  props<HttpResponse>()
);

export const LikeCourseFailure = createAction(
  '[Course] Like Course Failure',
  props<any>()
);

export const BuyCourse = createAction(
  '[Course] Buy Course',
  props<{ model: BuyCourseRequest }>()
);

export const BuyCourseSuccess = createAction(
  '[Course] Buy Course success',
  props<HttpResponse<BuyCourseResponse>>()
);

export const BuyCourseFailure = createAction(
  '[Course] Buy Course Failure',
  props<{ error: any }>()
);
