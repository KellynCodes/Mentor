import { BuyCourseRequest } from './../../../services/course/Dto/buy-course.dto';
import { JwtService } from './../../../services/utils/jwt.service';
import { PaginationQueryDto } from './../../../data/Dto/shared/request.query.dto';
import { CourseResponseDto } from '../../../services/course/Dto/course-response.dto';
import { Component } from '@angular/core';
import { AppState } from '../../../state/app/app.state';
import { Store } from '@ngrx/store';
import * as courseActions from '../state/action';
import * as courseSelector from '../state/selector';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

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
    private alert: ToastrService,
    private jwtService: JwtService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCourse();
    if (this.filteredCourse == null) {
      this.LoadCourse();
      this.getCourse();
    }
  }

  checkout(): void {
    const courseId = this.router.snapshot.params['id'];
    const userEmail = this.jwtService.CheckUser()?.email;
    if (!courseId && !userEmail && this.filteredCourse?.length > 0) {
      this.alert.error('Payload is not valid. Please try again.', 'Error');
      return;
    }
    const model: BuyCourseRequest = {
      courseId: courseId,
      email: userEmail!,
      amount: this.filteredCourse[0]?.price,
    };
    console.log(model);
    this.store.dispatch(courseActions.BuyCourse({ model: model }));
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
