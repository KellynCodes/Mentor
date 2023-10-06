import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './pricing/pricing.component';
import { CourseRoutingModule } from './routes/course-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { EventsComponent } from './events/events.component';
import { TrainersComponent } from './trainers/trainers.component';

@NgModule({
  declarations: [CoursesComponent, CourseDetailComponent, EventsComponent, TrainersComponent, PricingComponent],
  imports: [CommonModule, CourseRoutingModule],
})
export class CourseModule {}
