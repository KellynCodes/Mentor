import { AppState } from '../../../state/app/app.state';
import { PaginationQueryDto } from '../../../data/Dto/shared/request.query.dto';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as courseActions from '../state/action';
import * as courseSelector from '../state/selector';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'learnal-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  public courses$ = this.store.select(courseSelector.getCourse);
  public IsCourseLoading$ = this.store.select(courseSelector.IsCourseLoading);
  public errorMessage$ = this.store.select(courseSelector.errorMessage);
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCourses();
  }


  goTo(path: string): void {
    this.router.navigateByUrl(path);
  }

  getCourses(
    keyword: string = '',
    pageSize: number = 10,
    pageNumber: number = 1,
    courseLikes: number = 0
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
