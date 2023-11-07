import { Routes } from "@angular/router";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { UserComponent } from "../user/user.component";
import { UserCoursesComponent } from "../user-courses/user-courses.component";

export const userRoutes: Routes = [
  {
    path: ':username',
    component: UserComponent,
    title: "User",
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    title: "Dashboard"
  },

  {
    path: 'courses',
    component: UserCoursesComponent,
    title: "Your Courses"
  }
]
