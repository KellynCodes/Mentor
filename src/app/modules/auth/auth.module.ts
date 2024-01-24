import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './routes/auth-routing.module';
import { ImageCropperModule } from 'ngx-image-cropper';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { SharedModule } from '../components/shared.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NgIconsModule } from '@ng-icons/core';
import { faEye, faEyeSlash } from '@ng-icons/font-awesome/regular';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ImageCropperModule,
    SharedModule,
    NgIconsModule.withIcons({ faEye, faEyeSlash }),
  ],
})
export class AuthModule {}
