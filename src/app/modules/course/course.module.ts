import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { PricingComponent } from './pricing/pricing.component';
import { CourseRoutingModule } from './routes/course-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { EventsComponent } from './events/events.component';
import { TrainersComponent } from './trainers/trainers.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { MaterialModule } from '../../modules/material/material.module';
import { SharedModule } from '../components/shared.module';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { NgOptimizedImage } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseDetailComponent,
    EventsComponent,
    TrainersComponent,
    PricingComponent,
    UpdateCourseComponent,
  ],
  imports: [
    CourseRoutingModule,
    ToastrModule.forRoot({
      maxOpened: 8,
      autoDismiss: true,
      timeOut: 3000,
      positionClass: 'toast-top-center',
    }),
    NgOptimizedImage,
    YouTubePlayerModule,
    MaterialModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CourseModule {}
