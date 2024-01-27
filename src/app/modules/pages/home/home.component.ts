import { environment } from '../../../../environments/environment.development';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PaginationQueryDto } from '../../../data/Dto/shared/request.query.dto';
import { Store } from '@ngrx/store';
import * as courseActions from '../../../modules/course/state/action';
import * as courseSelector from '../../../modules/course/state/selector';
import * as authSelector from '../../../modules/auth/state/auth/auth.selector';
import { AppState } from '../../../state/app/app.state';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'learnal-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public courses$ = this.store.select(courseSelector.getCourse);
  public IsCourseLoading$ = this.store.select(courseSelector.IsCourseLoading);
  public errorMessage$ = this.store.select(courseSelector.errorMessage);
  public user$ = this.store.select(authSelector.selectUser);
  adminDashboardLink: string = environment.adminDashboardLink;
  private unSubscribe = new Subject();

  constructor(private store: Store<AppState>, private router: Router) {}
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
    courseLikes: number = 10
  ): void {
    const query: PaginationQueryDto = {
      keyword: keyword,
      pageNumber: pageNumber,
      pageSize: pageSize,
      courseLikes: courseLikes,
    };
    this.store.dispatch(
      courseActions.LoadCourse({ query: query, IsLoading: true })
    );
  }
}
