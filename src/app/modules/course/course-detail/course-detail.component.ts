import { PaginationQueryDto } from './../../../data/Dto/shared/request.query.dto';
import { CourseResponseDto } from './../../../services/course/Dto/CourseResponseDto';
import { CourseService } from './../../../services/course/course.service';
import { Component } from '@angular/core';
import { AppState } from '../../../state/app/app.state';
import { Store } from '@ngrx/store';
import * as courseActions from '../state/action';
import * as courseSelector from '../state/selector';
import { ActivatedRoute } from '@angular/router';
import { AsyncSubject, Observable, Subject, takeUntil } from 'rxjs';
import { HttpResponse } from 'src/app/data/Dto/shared/http.response.dto';

@Component({
  selector: 'learnal-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css',
})
export class CourseDetailComponent {
  public IsCourseLoading$ = this.store.select(courseSelector.IsCourseLoading);
  public errorMessage$ = this.store.select(courseSelector.errorMessage);
  public courses$ = this.store.select(courseSelector.getCourse);
  public ngUnSubscribe = new Subject();
  public filteredCourse: CourseResponseDto[] = [];
  public _videoId: string = '';
  constructor(
    private store: Store<AppState>,
    private courseService: CourseService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCourse();
    if (this.filteredCourse == null) {
      this.LoadCourse();
      this.getCourse();
    }
  }

  public extractVideoId(youtubeLink: string): string {
    const urlParams = new URLSearchParams(new URL(youtubeLink).search);
    const videoId = urlParams.get('v')!;
    return videoId;
  }

  get videoId(): string {
    return this.extractVideoId('qj_AZ_FkPtQ');
  }

  getCourse(): void {
    const courseId = this.router.snapshot.params['id'];
    this.courses$.pipe(takeUntil(this.ngUnSubscribe)).subscribe((data) => {
      const course: CourseResponseDto[] = data?.filter(
        (x) => x.id == courseId
      )!;
      this.filteredCourse = course;
    });
  }

  LoadCourse(
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
    {
      this.store.dispatch(
        courseActions.LoadCourse({ query: query, IsLoading: true })
      );
    }
  }

  ngOnDestroy(): void {
    this.ngUnSubscribe.complete();
  }
}
