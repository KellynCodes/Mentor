import { selectUser } from './../../../../core/state/auth/auth.selector';
import { Store } from '@ngrx/store';
import * as courseActions from '../../../../core/state/course/action';
import * as courseSelector from '../../../../core/state/course/selector';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { BuyCourseRequest } from '../../../../core/services/course/Dto/buy-course.dto';
import { CourseResponseDto } from '../../../../core/services/course/Dto/course-response.dto';
import { AppState } from '../../../../core/state/app/app.state';
import { PaginationQueryDto } from 'src/core/types/dto/request.query.dto';

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
  public course!: CourseResponseDto;
  public _videoId: string | null = '';
  public _userEmail: string = '';
  constructor(
    private store: Store<AppState>,
    private alert: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCourse();
    if (!this.course) {
      this.LoadCourse();
      this.getCourse();
    }
  }

  checkout(): void {
    const courseId = this.route.snapshot.params['id'];
    this.store
      .select(selectUser)
      .pipe(takeUntil(this.ngUnSubscribe))
      .subscribe((user) => (this._userEmail = user?.email!));
    if (!courseId && this.course) {
      this.alert.error('Payload is not valid. Please try again.', 'Error');
      return;
    }

    if (!this._userEmail) {
      this.alert.info('Login first to continue.', 'You are not logged In');
      this.router.navigateByUrl(
        `/auth/login?redirectTo=/course/detail/${courseId}`
      );
      return;
    }
    const model: BuyCourseRequest = {
      courseId: courseId,
      email: this._userEmail!,
      amount: this.course.price,
    };
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
    const courseId = this.route.snapshot.params['id'];
    if (!courseId) {
      this.alert.info(
        'Sorry! something unexpected happened.',
        'Try reloading the page.'
      );
      return;
    }
    this.courses$.pipe(takeUntil(this.ngUnSubscribe)).subscribe((data) => {
      this.course = data?.find((x) => x.id == courseId)!;
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
