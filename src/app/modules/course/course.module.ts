import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { PricingComponent } from './pricing/pricing.component';
import { CourseRoutingModule } from './routes/course-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { EventsComponent } from './events/events.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { MaterialModule } from '../../modules/material/material.module';
import { SharedModule } from '../components/shared.module';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseDetailComponent,
    EventsComponent,
    PricingComponent,
    UpdateCourseComponent,
  ],
  imports: [
    CourseRoutingModule,
    NgOptimizedImage,
    YouTubePlayerModule,
    MaterialModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CourseModule {}
