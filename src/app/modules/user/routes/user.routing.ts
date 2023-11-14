import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserComponent } from '../user/user.component';
import { UserCoursesComponent } from '../user-courses/user-courses.component';
import { roleGuard } from '../../../guard/role/role.guard';
import { authGuard } from '../../../guard/auth/auth.guard';

export const userRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
    canActivate: [roleGuard],
  },

  {
    path: 'courses',
    component: UserCoursesComponent,
    title: 'Your Courses',
  },
  {
    path: ':username',
    component: UserComponent,
    title: 'User',
    canActivate: [authGuard],
  },
];
