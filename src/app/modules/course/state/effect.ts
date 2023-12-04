import { CourseService } from './../../../services/course/course.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import * as CourseActions from './action';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/app/app.state';

@Injectable()
export class CourseEffect {
  constructor(
    private actions$: Actions,
    private courseService: CourseService,
    private store: Store<AppState>
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
        tap(() => {
          setTimeout(() => {
            this.store.dispatch(
              CourseActions.LoadCourseFailure({
                courses: null,
                IsLoading: false,
                errorMessage: null,
              })
            );
          }, 6000);
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
}
