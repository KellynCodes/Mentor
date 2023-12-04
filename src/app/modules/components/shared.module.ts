import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { LoaderComponent } from './loader/loader.component';
import { ButtonComponent } from './button/button.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { CourseNotFoundComponent } from './course-not-found/course-not-found.component';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    AlertComponent,
    LoaderComponent,
    ButtonComponent,
    SearchComponent,
    CourseNotFoundComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild([])],
  exports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    AlertComponent,
    LoaderComponent,
    ButtonComponent,
    CourseNotFoundComponent,
    MaterialModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
