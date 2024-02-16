import { CourseService } from './../../../core/services/course/course.service';
import { Page } from './../../../core/types/enum/Page';
import { Component, Inject, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { BrowserApiService } from '../../../core/services/utils/browser.api.service';
import { AppState } from '../../../core/state/app/app.state';
import { Store } from '@ngrx/store';
import * as courseActions from '../../../core/state/course/action';
import * as courseSelector from '../../../core/state/course/selector';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { DOCUMENT } from '@angular/common';
import { Role } from 'src/core/types/enum/role';

@Component({
  selector: 'dash-home',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  public courses$ = this.store.select(courseSelector.getCourse);
  public IsCourseLoading$ = this.store.select(courseSelector.IsCourseLoading);
  public isLoading$ = this.store.select(courseSelector.IsLoading);
  public errorMessage$ = this.store.select(courseSelector.errorMessage);
  private unSubscribe = new Subject();
  public page = Page;
  public renderComponent: any;
  private window = this.document.defaultView;
  public role = Role;
  public courseService = inject(CourseService);

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private browserApiService: BrowserApiService,
    private authService: AuthService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderComponent = this.courseService.getComponent(Page.CHART);
  }

  ngOnInit(): void {
    this.courses$.pipe(takeUntil(this.unSubscribe)).subscribe((courses) => {
      if (!courses) {
        this.getCourses();
      }
    });
  }

  ngOnDestroy(): void {
    this.unSubscribe.complete();
  }

  getComponent(component: Page) {
    this.renderComponent = this.courseService.getComponent(component);
    if (this.window?.innerWidth! <= 600) {
      this.window?.scrollTo(0, 700);
    }
    if (this.window?.innerWidth! < 900) {
      this.window?.scrollTo(0, 500);
    }
  }

  goTo(mainPath: string, path: string): void {
    this.router.navigateByUrl(`${mainPath}${path}`);
  }

  likeCourse(email: string, courseId: string): void {
    if (email && courseId) {
      const action = courseActions.LikeCourse({
        email: email,
        courseId: courseId,
      });
      this.store.dispatch(action);
    }
  }

  getCourses(
    keyword: string = '',
    pageSize: number = 10,
    pageNumber: number = 1,
    courseLikes: number = 0
  ): void {
    this.store.dispatch(
      courseActions.LoadCourse({
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
  logout(): void {
    this.authService.logout();
  }
}
