import { NgModule } from '@angular/core';
import { UserRoutingModule } from './routes/user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserCoursesComponent } from './user-courses/user-courses.component';
import { SharedModule } from '../components/shared.module';

@NgModule({
  declarations: [UserCoursesComponent, DashboardComponent, UserComponent],
  imports: [UserRoutingModule, SharedModule],
})
export class UserModule {}
