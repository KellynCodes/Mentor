import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'page',
    loadChildren: () =>
      import('../pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'course',
    loadChildren: () =>
      import('../course/course.module').then((m) => m.CourseModule),
  },
  { path: 'not-found', component: NotfoundComponent, title: 'Page Not Found' },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];
