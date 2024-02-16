import { TruncatePipe } from './../../../core/pipes/truncate.pipe';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    LoaderComponent,
    ButtonComponent,
    SearchComponent,
    CourseNotFoundComponent,
    UserProfileComponent,
    TruncatePipe,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild([])],
  exports: [
    TruncatePipe,
    CommonModule,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    LoaderComponent,
    ButtonComponent,
    UserProfileComponent,
    CourseNotFoundComponent,
    MaterialModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
