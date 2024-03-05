import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard.component';
import { CourseComponent } from '../course/course.component';
import { Alerts } from '../alert';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    title: 'Dashboard',
    children: [
      {
        path: 'notifications',
        component: Alerts,
        title: 'Notifications',
      },
    ],
  },
  { path: 'course/:id', component: CourseComponent, title: 'Course' },
];
