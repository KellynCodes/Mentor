import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard.component';
import { CourseComponent } from '../course/course.component';
import { DashCoursesComponent } from '../dashcourses/dashcourses.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    title: 'Dashboard',
  },
  { path: 'courses', component: DashCoursesComponent, title: 'Courses' },
  { path: 'course', component: CourseComponent, title: 'Course' },
];
