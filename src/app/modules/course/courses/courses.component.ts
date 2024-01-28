import { BrowserApiService } from './../../../services/utils/browser.api.service';
import { AppState } from '../../../state/app/app.state';
import { PaginationQueryDto } from '../../../data/Dto/shared/request.query.dto';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as courseActions from '../state/action';
import * as courseSelector from '../state/selector';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'learnal-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  public courses$ = this.store.select(courseSelector.getCourse);
  public IsCourseLoading$ = this.store.select(courseSelector.IsCourseLoading);
  public errorMessage$ = this.store.select(courseSelector.errorMessage);
  private unSubscribe = new Subject();
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private toastr: ToastrService,
    private browserApiService: BrowserApiService
  ) {}

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

  goTo(mainPath: string, path: string): void {
    this.router.navigateByUrl(`${mainPath}${path}`);
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
      window.scrollTo(0, 0);
    }
  }
}
