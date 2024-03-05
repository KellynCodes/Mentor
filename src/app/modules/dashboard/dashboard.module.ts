import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../components/shared.module';
import { DashboardRoutingModule } from './routes/dashboard-routing.module';
import { DashCoursesComponent } from './dashcourses/dashcourses.component';
import { CourseComponent } from './course/course.component';
import { NgChartsModule } from 'ng2-charts';
import { FavCoursesComponent } from './fav-courses/fav-courses.component';
import { ChartComponent } from './chart/chart.component';
import { NgIconsModule } from '@ng-icons/core';
import { faChartBar, faCircleXmark } from '@ng-icons/font-awesome/regular';
import { faSolidAddressBook } from '@ng-icons/font-awesome/solid';
import { SideBar } from './sidebar';
import { Alert, Alerts } from './alert';
import { UserAccount } from './account/account';

@NgModule({
  declarations: [
    DashboardComponent,
    DashCoursesComponent,
    CourseComponent,
    FavCoursesComponent,
    ChartComponent,
    UserAccount,
    Alerts,
    SideBar,
    Alert,
  ],
  imports: [
    SharedModule,
    DashboardRoutingModule,
    NgChartsModule.forRoot(),
    NgIconsModule.withIcons({ faChartBar, faCircleXmark, faSolidAddressBook }),
  ],
})
export class DashboardModule {}
