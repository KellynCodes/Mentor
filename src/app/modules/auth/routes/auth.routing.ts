import { Routes } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { VerifyEmailComponent } from '../verify-email/verify-email.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';

export const authRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        title: 'Login',
        children: [
          {
            path: 'forgot-password',
            component: ForgotPasswordComponent,
            title: 'Forgot Password',
          },
        ],
      },
      {
        path: 'signup',
        component: SignupComponent,
        title: 'SignUp',
      },
      {
        path: 'verify-email',
        component: VerifyEmailComponent,
        title: 'Verify-email',
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
        title: 'Reset Password',
      },
    ],
  },
];
