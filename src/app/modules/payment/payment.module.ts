import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentVerificationComponent } from './payment-verification/payment-verification.component';
import { VerifyPaymentComponent } from './verify-payment/verify-payment.component';
import { SharedModule } from '../components/shared.module';

@NgModule({
  declarations: [PaymentVerificationComponent, VerifyPaymentComponent],
  imports: [CommonModule, PaymentRoutingModule, SharedModule],
})
export class PaymentModule {}
