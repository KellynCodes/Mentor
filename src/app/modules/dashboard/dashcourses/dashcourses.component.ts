import { DOCUMENT } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Component, DestroyRef, inject, Inject } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { CourseService } from '../../../../core/services/course/course.service';
import { BrowserApiService } from '../../../../core/services/utils/browser.api.service';
import { AppState } from '../../../../core/state/app/app.state';
import { Role } from '../../../../core/types/enum/role';
import * as courseSelector from '../../../../core/state/course/selector';
import * as courseAction from '../../../../core/state/course/action';
import { CourseComponent } from '../course/course.component';

@Component({
  selector: 'learnal-dashcourses',
  templateUrl: './dashcourses.component.html',
})
export class DashCoursesComponent {
  public courses$ = this.store.select(courseSelector.getCourse);
  public IsCourseLoading$ = this.store.select(courseSelector.IsCourseLoading);
  public isLoading$ = this.store.select(courseSelector.IsLoading);
  public errorMessage$ = this.store.select(courseSelector.errorMessage);
  public renderComponent: any;
  private window = this.document.defaultView;
  public role = Role;
  private destroyRef = inject(DestroyRef);
  public courseService = inject(CourseService);
  public courseComponent = CourseComponent;
  public courseId: string = '';
  public showCourse: boolean = false;

  constructor(
    private store: Store<AppState>,
    private browserApiService: BrowserApiService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.courses$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((courses) => {
        if (!courses) {
          this.getCourses();
        }
      });
  }

  showCourseDetail(courseId: string): string {
    this.courseId = courseId;
    this.showCourse = !this.showCourse;
    return courseId;
  }

  getCourses(
    keyword: string = '',
    pageSize: number = 10,
    pageNumber: number = 1,
    courseLikes: number = 0
  ): void {
    this.store.dispatch(
      courseAction.LoadCourse({
        query: {
          keyword: keyword,
          pageNumber: pageNumber,
          pageSize: pageSize,
          courseLikes: courseLikes,
        },
        IsLoading: true,
      })
    );
  }

  pageChanged(event: PageEvent) {
    const page: number = event.pageIndex + 1;
    this.getCourses('', 10, page);
    if (this.browserApiService.isBrowser) {
      this.window?.scrollTo(0, 0);
    }
  }
}
