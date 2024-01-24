import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { HttpResponse } from '../../../data/Dto/shared/http.response.dto';
import { VerifyEmailDto } from '../../../services/auth/Dto/verify-email.dto';
import { AppState } from '../../../state/app/app.state';
import {
  ResendOtpRequest,
  VerifyEmailRequest,
} from '../state/auth/auth.action';
import * as verifyEmailSelector from '../state/auth/auth.selector';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'learnal-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css'],
})
export class VerifyEmailComponent {
  userEmail!: string | null;
  otp: string = '';
  resendOtpTimes = signal<number>(0);
  isLoading$ = this.store.select(verifyEmailSelector.IsVerifyEmailLoading);
  message$ = this.store.select(verifyEmailSelector.message);
  isSuccessful$ = this.store.select(verifyEmailSelector.isVerifySuccessful);
  verificationState$ = this.store.select(verifyEmailSelector.verifyEmailState);

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
    const request: HttpResponse<VerifyEmailDto> = {
      message: null,
      isSuccessful: false,
      data: {
        isLoading: true,
        email: this.userEmail,
        otp: this.otp,
      },
    };
    this.store.dispatch(VerifyEmailRequest({ model: request }));
  }
}
