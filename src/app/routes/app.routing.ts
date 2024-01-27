import { Routes } from '@angular/router';
import { HomeComponent } from '../modules/pages/home/home.component';
import { NotfoundComponent } from '../modules/components/notfound/notfound.component';
import { IndexComponent } from '../modules/pages/index/index.component';
import { navigationGuard } from '../guard/navigation/navigation.guard';
import { authGuard } from '../guard/auth/auth.guard';

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
        path: 'dashboard',
        loadChildren: () =>
          import('../modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
        canActivate: [authGuard],
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
        canActivate: [navigationGuard],
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
