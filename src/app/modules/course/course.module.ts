import { NgModule } from '@angular/core';
import { PricingComponent } from './pricing/pricing.component';
import { CourseRoutingModule } from './routes/course-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { EventsComponent } from './events/events.component';
import { TrainersComponent } from './trainers/trainers.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { MaterialModule } from '../../modules/material/material.module';
import { SharedModule } from '../components/shared.module';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseDetailComponent,
    EventsComponent,
    TrainersComponent,
    PricingComponent,
    UpdateCourseComponent,
  ],
  imports: [CourseRoutingModule, MaterialModule, SharedModule],
})
export class CourseModule {}
