import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyPaymentComponent } from './verify-payment/verify-payment.component';
import { PaymentVerificationComponent } from './payment-verification/payment-verification.component';

const routes: Routes = [
  { path: '', component: VerifyPaymentComponent },
  { path: 'verify', component: PaymentVerificationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentRoutingModule {}
