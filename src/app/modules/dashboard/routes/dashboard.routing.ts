import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard.component';
import { CourseComponent } from '../course/course.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    title: 'Dashboard',
  },
  { path: 'course/:id', component: CourseComponent, title: 'Course' },
];
