import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routing';


@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
