import { Routes } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { navigationGuard } from '../../../guard/navigation/navigation.guard';
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
        canActivate: [navigationGuard],
        children: [
          {
            path: 'forgot-password',
            component: ForgotPasswordComponent,
            title: 'Forgot Password',
            canActivate: [navigationGuard],
          },
        ],
      },
      {
        path: 'signup',
        component: SignupComponent,
        title: 'SignUp',
        canActivate: [navigationGuard],
      },
      {
        path: 'verify-email',
        component: VerifyEmailComponent,
        title: 'Verify-email',
        canActivate: [navigationGuard],
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
        title: 'Reset Password',
        canActivate: [navigationGuard],
      },
    ],
  },
];
