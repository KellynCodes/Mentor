import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../components/shared.module';
import { DashboardRoutingModule } from './routes/dashboard-routing.module';
import { DashCoursesComponent } from './dashcourses/dashcourses.component';
import { CourseComponent } from './course/course.component';
import { NgChartsModule } from 'ng2-charts';
import { FavCoursesComponent } from './fav-courses/fav-courses.component';
import { ChartComponent } from './chart/chart.component';
import { NotificationComponent } from './notification/notification.component';
import { NgIconsModule } from '@ng-icons/core';
import { faChartBar } from '@ng-icons/font-awesome/regular';

@NgModule({
  declarations: [
    DashboardComponent,
    DashCoursesComponent,
    CourseComponent,
    FavCoursesComponent,
    ChartComponent,
    NotificationComponent,
  ],
  imports: [
    SharedModule,
    DashboardRoutingModule,
    NgChartsModule.forRoot(),
    NgIconsModule.withIcons({ faChartBar }),
  ],
})
export class DashboardModule {}
