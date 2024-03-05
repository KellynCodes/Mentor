import { Store } from '@ngrx/store';
import * as courseActions from '../../../../core/state/course/action';
import * as courseSelector from '../../../../core/state/course/selector';
import { ToastrService } from 'ngx-toastr';
import {
  Component,
  DestroyRef,
  Renderer2,
  inject,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { CourseResponseDto } from '../../../../core/services/course/Dto/course-response.dto';
import { AppState } from '../../../../core/state/app/app.state';
import { PaginationQueryDto } from 'src/core/types/dto/request.query.dto';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'learnal-course',
  templateUrl: './course.component.html',
})
export class CourseComponent {
  @Input({ required: true }) courseId: string = '';
  @Input({ required: true }) show: boolean = false;
  @Output() showChange = new EventEmitter<boolean>();
  public IsCourseLoading$ = this.store.select(courseSelector.IsCourseLoading);
  public errorMessage$ = this.store.select(courseSelector.errorMessage);
  public courses$ = this.store.select(courseSelector.getCourse);
  public course: CourseResponseDto | null = null;
  public _videoId: string | null = '';
  public _userEmail: string = '';
  private _destroyRef = inject(DestroyRef);
  private _document = inject(DOCUMENT);
  public isUserProfileVisible: boolean = false;
  constructor(
    private store: Store<AppState>,
    private alert: ToastrService,
    private renderer2: Renderer2
  ) {}

  ngOnInit(): void {
    this.renderer2.addClass(this._document.body, 'overflow-hidden');
    this.getCourse();
    if (this.course == null) {
      this.LoadCourse();
      this.getCourse();
    }
  }

  ngOnDestroy(): void {
    this.renderer2.removeClass(this._document.body, 'overflow-hidden');
    this.showChange.emit(false);
  }

  deleteCourse(courseId: string) {
    if (courseId) {
      this.store.dispatch(courseActions.DeleteCourse({ courseId: courseId }));
      this.ngOnDestroy();
    }
  }

  getCourse(): void {
    if (!this.courseId) {
      this.alert.info(
        'Sorry! something unexpected happened.',
        'Try reloading the page.'
      );
      return;
    }
    this.courses$
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((data) => {
        const course: CourseResponseDto = data?.find(
          (x) => x.id == this.courseId
        )!;
        this.course = course;
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
}
