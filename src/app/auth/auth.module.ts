import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './routes/auth-routing.module';
import { ImageCropperModule } from 'ngx-image-cropper';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { MaterialModule } from '../material/material.module';
import { LoaderComponent } from '../components/loader/loader.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    LoaderComponent,
    VerifyEmailComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ImageCropperModule,
    MaterialModule,
  ],
})
export class AuthModule {}
