import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { courseRoute } from './course.routing';

@NgModule({
  imports: [RouterModule.forChild(courseRoute)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
