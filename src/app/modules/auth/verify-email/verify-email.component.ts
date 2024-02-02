import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { AppState } from 'src/core/state/app/app.state';
import {
  ResendOtpRequest,
  VerifyEmailRequest,
} from '../../../../core/state/auth/auth.action';
import * as authSelector from '../../../../core/state/auth/auth.selector';

@Component({
  selector: 'learnal-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css'],
})
export class VerifyEmailComponent {
  userEmail!: string | null;
  otp: string = '';
  resendOtpTimes = signal<number>(0);
  isLoading$ = this.store.select(authSelector.getLoading);
  errorMessage$ = this.store.select(authSelector.getErrorMessage);
  successMessage$ = this.store.select(authSelector.successMessage);
  isSuccessful$ = this.store.select(authSelector.isSuccessful);

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private alert: ToastrService
  ) {}

  ngOnInit(): void {
    const queryParams = this.route.snapshot.queryParams;
    this.userEmail = queryParams['email'];
    this.otp = queryParams['otp'];
  }

  resendOtp(): void {
    if (!this.userEmail) {
      this.alert.error('User email not found!');
      return;
    }

    if (this.resendOtpTimes() >= 3) {
      return;
    }
    this.resendOtpTimes.update((value) => {
      if (value >= 0 && value < 3) {
        return (value += 1);
      } else {
        return value;
      }
    });

    this.store.dispatch(ResendOtpRequest({ email: this.userEmail }));
  }

  onSubmit(): void {
    if (this.userEmail && this.otp) {
      this.store.dispatch(
        VerifyEmailRequest({
          model: { email: this.userEmail, otp: `${this.otp}` },
        })
      );
    } else {
      this.alert.error(
        'User email and OTP is required.',
        'Invalid Model state.'
      );
      return;
    }
  }
}
