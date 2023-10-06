import { Routes } from '@angular/router';
import { CoursesComponent } from '../courses/courses.component';
import { CourseDetailComponent } from '../course-detail/course-detail.component';
import { TrainersComponent } from '../trainers/trainers.component';
import { EventsComponent } from '../events/events.component';

export const courseRoute: Routes = [
  {
    path: 'courses',
    component: CoursesComponent,
    title: 'Courses',
  },
  {
    path: 'course-detail',
    component: CourseDetailComponent,
    title: 'Course Details',
  },
  {
    path: 'trainers',
    component: TrainersComponent,
    title: 'Trainers',
  },
  {
    path: 'events',
    component: EventsComponent,
    title: 'Events',
  },
];
