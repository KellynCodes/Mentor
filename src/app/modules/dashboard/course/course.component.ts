import { selectUser } from './../../../../core/state/auth/auth.selector';
import { Store } from '@ngrx/store';
import * as courseActions from '../../../../core/state/course/action';
import * as courseSelector from '../../../../core/state/course/selector';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import {
  Component,
  DestroyRef,
  ElementRef,
  Renderer2,
  inject,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { BuyCourseRequest } from '../../../../core/services/course/Dto/buy-course.dto';
import { CourseResponseDto } from '../../../../core/services/course/Dto/course-response.dto';
import { AppState } from '../../../../core/state/app/app.state';
import { PaginationQueryDto } from 'src/core/types/dto/request.query.dto';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'learnal-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {
  @Input({ required: true }) courseId: string = '';
  @Input({ required: true }) show: boolean = false;
  @Output() showChange = new EventEmitter<boolean>();
  public IsCourseLoading$ = this.store.select(courseSelector.IsCourseLoading);
  public errorMessage$ = this.store.select(courseSelector.errorMessage);
  public courses$ = this.store.select(courseSelector.getCourse);
  public filteredCourse: CourseResponseDto[] = [];
  public _videoId: string | null = '';
  public _userEmail: string = '';
  private _destroyRef = inject(DestroyRef);
  private _document = inject(DOCUMENT);
  constructor(
    private store: Store<AppState>,
    private alert: ToastrService,
    private renderer2: Renderer2
  ) {}

  ngOnInit(): void {
    console.log(this.show);
    this.renderer2.setStyle(this._document.body, 'overflow', 'hidden');
    this.getCourse();
    if (this.filteredCourse == null) {
      this.LoadCourse();
      this.getCourse();
    }
  }

  ngOnDestroy(): void {
    this.renderer2.setStyle(this._document.body, 'overflow', 'scroll');
    this.showChange.emit(false);
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
        const course: CourseResponseDto[] = data?.filter(
          (x) => x.id == this.courseId
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
}
