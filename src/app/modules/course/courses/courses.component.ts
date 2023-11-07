import { AppState } from '../../../state/app/app.state';
import { PaginationQueryDto } from '../../../data/Dto/shared/request.query.dto';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as courseActions from '../state/action';
import * as courseSelector from '../state/selector';

@Component({
  selector: 'learnal-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  public courses$ = this.store.select(courseSelector.getCourse);
  public IsCourseLoading$ = this.store.select(courseSelector.IsCourseLoading);
  public errorMessage$ = this.store.select(courseSelector.errorMessage);
  constructor(private store: Store<AppState>) {}

  ngAfterViewInit(): void {
    this.getCourses();
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
