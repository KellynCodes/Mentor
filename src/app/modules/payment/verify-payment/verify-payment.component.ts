import { PaginationQueryDto } from './../../../../core/types/dto/request.query.dto';
import { JwtService } from './../../../../core/services/utils/jwt.service';
import { CourseService } from './../../../../core/services/course/course.service';
import { CourseResponseDto } from './../../../../core/services/course/Dto/course-response.dto';
import { AppState } from './../../../../core/state/app/app.state';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { BuyCourseRequest } from '../../../../core/services/course/Dto/buy-course.dto';
import { Store } from '@ngrx/store';
import * as courseActions from '../../../../core/state/course/action';
import * as courseSelector from '../../../../core/state/course/selector';
import { HttpResponse } from '../../../../core/types/dto/http.response.dto';

@Component({
  selector: 'learnal-verify-payment',
  templateUrl: './verify-payment.component.html',
  styleUrl: './verify-payment.component.css',
})
export class VerifyPaymentComponent
  implements OnDestroy, AfterViewInit, OnInit
{
  reference: string;
  unSubscribe = new Subject();
  public IsCourseLoading$ = this.store.select(courseSelector.IsCourseLoading);
  public errorMessage$ = this.store.select(courseSelector.errorMessage);
  public courses$ = this.store.select(courseSelector.getCourse);
  public ngUnSubscribe = new Subject();
  public filteredCourse: CourseResponseDto[] = [];
  paymentVerificationMessage!: string;
  isVerifying = signal<boolean>(false);
  isSuccessful = signal<boolean>(false);
  courseId!: string;

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alert: ToastrService,
    private courseService: CourseService,
    private jwtService: JwtService
  ) {
    this.reference = this.activatedRoute.snapshot.queryParams['reference'];
  }

  ngOnInit(): void {
    this.getCourse();
    if (this.filteredCourse == null) {
      this.LoadCourse();
      this.getCourse();
    }
  }

  ngAfterViewInit(): void {
    this.verifyPayment(this.reference);
  }

  ngOnDestroy(): void {
    this.unSubscribe.complete();
  }

  goTo(): void {
    this.router.navigateByUrl(`/payment/verify?courseId=${this.courseId}`);
  }

  checkout(): void {
    const courseId = this.activatedRoute.snapshot.params['id'];
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
    this.store.dispatch(courseActions.BuyCourse({ model: model }));
  }

  verifyPayment(reference: string): void {
    this.isVerifying.set(true);
    this.courseService
      .verifyPayment(reference)
      .pipe(takeUntil(this.unSubscribe))
      .subscribe({
        next: (response: HttpResponse) => {
          console.log(response);
          if (response.isSuccessful) {
            this.isSuccessful.set(response.isSuccessful);
            this.alert.success(
              'Payment verification successful.',
              'Payment Verification'
            );
            this.paymentVerificationMessage = response.message;
          }
          this.isVerifying.set(false);
        },
        error: (error: any) => {
          console.log(error);
          this.alert.error(
            `An error occurred while verifying your payment: ${error?.error?.Message}`,
            'Payment Verification'
          );
          this.paymentVerificationMessage =
            'Sorry your payment verification failed. Make sure your payment was completed successfully and try again, or contact us if you feel your payment was successful and nothing went wrong.';
          this.isVerifying.set(false);
          this.isSuccessful.set(error?.error?.IsSuccessful);
        },
      });
  }

  getCourse(): void {
    this.courseId = this.activatedRoute.snapshot.params['id'];
    this.courses$.pipe(takeUntil(this.unSubscribe)).subscribe((data) => {
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
