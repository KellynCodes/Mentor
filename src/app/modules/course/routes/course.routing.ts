import { Routes } from '@angular/router';
import { CoursesComponent } from '../courses/courses.component';
import { CourseDetailComponent } from '../course-detail/course-detail.component';
import { EventsComponent } from '../events/events.component';
import { PricingComponent } from '../../course/pricing/pricing.component';
import { UpdateCourseComponent } from '../update-course/update-course.component';

export const courseRoute: Routes = [
  {
    path: 'courses',
    component: CoursesComponent,
    title: 'Courses',
  },
  {
    path: 'update/:id/:type',
    component: UpdateCourseComponent,
    title: 'Courses',
  },
  {
    path: 'detail/:id',
    component: CourseDetailComponent,
    title: 'Course Details',
  },

  {
    path: 'events',
    component: EventsComponent,
    title: 'Events',
  },
  {
    path: 'pricing',
    component: PricingComponent,
    title: 'Pricing',
  },
];
