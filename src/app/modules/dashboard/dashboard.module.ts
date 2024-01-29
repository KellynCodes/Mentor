import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../components/shared.module';
import { DashboardRoutingModule } from './routes/dashboard-routing.module';
import { DashCoursesComponent } from './dashcourses/dashcourses.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [DashboardComponent, DashCoursesComponent, CourseComponent],
  imports: [SharedModule, DashboardRoutingModule],
})
export class DashboardModule {}
