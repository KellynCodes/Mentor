import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { LoaderComponent } from './loader/loader.component';
import { ButtonComponent } from './button/button.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { CourseNotFoundComponent } from './course-not-found/course-not-found.component';

@NgModule({
  declarations: [
    AlertComponent,
    LoaderComponent,
    ButtonComponent,
    SearchComponent,
    CourseNotFoundComponent,
  ],
  imports: [CommonModule, RouterModule.forChild([])],
  exports: [
    CommonModule,
    AlertComponent,
    LoaderComponent,
    ButtonComponent,
    CourseNotFoundComponent,
  ],
})
export class SharedModule {}
