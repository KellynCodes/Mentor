import { Routes } from '@angular/router';
import { authGuard } from '../../../guard/auth/auth.guard';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from '../dashboard/pages/home/home.component';
import { NotFoundComponent } from '../dashboard/components/not-found/not-found.component';
import { ContactComponent } from '../dashboard/pages/contact/contact.component';
import { FaqsComponent } from '../dashboard/components/faqs/faqs.component';
import { UserProfileComponent } from '../dashboard/pages/user-profile/user-profile.component';

export const userRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
    canActivate: [authGuard],
    children: [
      { path: '', component: HomeComponent, title: 'Dashboard' },
      { path: 'contact', component: ContactComponent, title: 'Contact' },
      {
        path: 'profile',
        component: UserProfileComponent,
        title: 'You Profile',
      },
      { path: 'faqs', component: FaqsComponent, title: 'Dashboard' },
      {
        path: 'not-found',
        component: NotFoundComponent,
        title: 'Page Not Found',
      },
      { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
    ],
  },
];
