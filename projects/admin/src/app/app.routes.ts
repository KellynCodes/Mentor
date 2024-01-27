import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { UsersComponent } from './pages/users/users.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Dashboard' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'signup', component: SignupComponent, title: 'Sign Up' },
  {
    path: 'profile',
    component: UserProfileComponent,
    title: 'You Profile',
  },
  {
    path: 'users',
    component: UsersComponent,
    title: 'Users',
  },
  { path: 'faqs', component: FaqsComponent, title: 'Dashboard' },
  {
    path: 'not-found',
    component: NotFoundComponent,
    title: 'Page Not Found',
  },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];
