import { Routes } from '@angular/router';
import { HomeComponent } from '../modules/pages/home/home.component';
import { NotfoundComponent } from '../modules/components/notfound/notfound.component';
import { IndexComponent } from '../modules/pages/index/index.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        title: 'Home',
      },
      {
        path: 'page',
        loadChildren: () =>
          import('../modules/pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('../modules/auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'course',
        loadChildren: () =>
          import('../modules/course/course.module').then((m) => m.CourseModule),
      },
    ],
  },

  { path: 'not-found', component: NotfoundComponent, title: 'Page Not Found' },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];
