import { UserService } from './../../services/user/user.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import * as CourseActions from './action';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CourseService } from '../../services/course/course.service';
import { BrowserApiService } from '../../services/utils/browser.api.service';
import { AppState } from '../app/app.state';

@Injectable({ providedIn: 'root' })
export class CourseEffect {
  constructor(
    private actions$: Actions,
    private courseService: CourseService,
    private userService: UserService,
    private store: Store<AppState>,
    private alert: ToastrService,
    private browserAPiService: BrowserApiService
  ) {}

  // Fetch Course request
  FetchCourseRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.LoadCourse),
      exhaustMap((action) =>
        this.courseService.getAllCourse(action.query!).pipe(
          map((res) => {
            return CourseActions.LoadCourseSuccess({
              courses: res.data!.records,
            });
          }),
          catchError((error) => {
            return of(
              CourseActions.LoadCourseFailure({
                courses: null,
                IsLoading: false,
                errorMessage: error.error,
              })
            );
          })
        )
      )
    )
  );

  FetchUserCourseRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.LoadUserCourse),
      exhaustMap((action) =>
        this.userService.getCourses(action.query!).pipe(
          map((res) => {
            return CourseActions.LoadUserCourseSuccess({
              courses: res.data!,
            });
          }),
          catchError((error) => {
            return of(
              CourseActions.LoadCourseFailure({
                courses: null,
                IsLoading: false,
                errorMessage: error.error,
              })
            );
          })
        )
      )
    )
  );

  GetCourseRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.GetCourse),
      exhaustMap((action) =>
        this.courseService.getCourse(action.courseId).pipe(
          map((res) => {
            return CourseActions.GetCourseSuccess({
              course: res.data!,
            });
          }),
          catchError((error) => {
            return of(
              CourseActions.LoadCourseFailure({
                courses: null,
                IsLoading: false,
                errorMessage: error.error,
              })
            );
          })
        )
      )
    )
  );

  resetCourseErrorMessage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CourseActions.LoadCourseFailure),
        tap((error) => {
          if (typeof error?.errorMessage == 'object') {
            this.alert.error(error.errorMessage.message);
          }
          if (typeof error?.errorMessage == 'string') {
            this.alert.error(`${error.errorMessage}`);
          }
          setTimeout(() => {
            this.store.dispatch(CourseActions.ResetCourseFetchState());
          }, 3000);
        })
      ),
    { dispatch: false }
  );

  createCourseRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.CreateCourse),
      exhaustMap((action) =>
        this.courseService.createCourse(action.course).pipe(
          map((res) => {
            return CourseActions.CreateCourseSuccess({ course: res.data! });
          }),
          catchError((error) => {
            return of(CourseActions.CreateCourseFailure(error.error));
          })
        )
      )
    )
  );

  updateCourseRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.UpdateCourse),
      exhaustMap((action) =>
        this.courseService.updateCourse(action.course).pipe(
          map((res) => {
            return CourseActions.UpdateCourseSuccess({ course: res.data! });
          }),
          catchError((error) => {
            return of(CourseActions.CreateCourseFailure(error.error));
          })
        )
      )
    )
  );

  updateCoursePathRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.UpdateCoursePath),
      exhaustMap((action) =>
        this.courseService.updateCoursePath(action.course).pipe(
          map((res) => {
            return CourseActions.UpdateCourseSuccess({ course: res.data! });
          }),
          catchError((error) => {
            return of(CourseActions.CreateCourseFailure(error.error));
          })
        )
      )
    )
  );

  BuyCourseRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.BuyCourse),
      exhaustMap((action) =>
        this.courseService.buyCourse(action.model).pipe(
          map((res) => {
            return CourseActions.BuyCourseSuccess(res);
          }),
          catchError((error) => {
            return of(CourseActions.BuyCourseFailure(error.error));
          })
        )
      )
    )
  );

  LikeCourseRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.LikeCourse),
      exhaustMap((action) =>
        this.courseService.LikeCourse(action.email, action.courseId).pipe(
          map((res) => {
            return CourseActions.LikeCourseSuccess(res);
          }),
          catchError((error) => {
            return of(CourseActions.LikeCourseFailure(error.error));
          })
        )
      )
    )
  );

  DeleteCourseRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.DeleteCourse),
      exhaustMap((action) =>
        this.courseService.deleteCourse(action.courseId).pipe(
          map((res) => {
            if (res.isSuccessful) {
              this.alert.success('Course deleted.', 'Success');
            }
          }),
          catchError((error) => {
            return of(CourseActions.LikeCourseFailure(error.error));
          })
        )
      )
    )
  );

  LikeCourseSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CourseActions.LikeCourseSuccess),
        map((response) => {
          if (response.isSuccessful) {
            this.alert.success(response.message);
            this.store.dispatch(
              CourseActions.LoadCourse({
                query: {
                  keyword: '',
                  pageNumber: 1,
                  pageSize: 10,
                  courseLikes: 0,
                },
                IsLoading: true,
              })
            );
          }
        })
      ),
    { dispatch: false }
  );

  LikeCourseFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CourseActions.LikeCourseFailure),
        tap((response) => {
          this.alert.error('Something went wrong.', 'Try again!');
        })
      ),
    { dispatch: false }
  );

  BuyCourseSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CourseActions.BuyCourseSuccess),
        map((response) => {
          if (this.browserAPiService.isBrowser) {
            window.open(response?.data?.paymentLink, '_self');
          }
        })
      ),
    { dispatch: false }
  );

  BuyCourseFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CourseActions.BuyCourseFailure),
        map((res) => {
          this.alert.error(`${res.error.message}`, 'Error');
        })
      ),
    { dispatch: false }
  );
}
