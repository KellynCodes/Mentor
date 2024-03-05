import { TruncatePipe } from './../../../core/pipes/truncate.pipe';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader.component';
import { Button } from './button';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { Empty } from './empty/empty';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { UserProfile } from './user-profile/user-profile';
import { DeleteConfirmation } from './delete/delete-confirmation';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    LoaderComponent,
    Button,
    SearchComponent,
    Empty,
    UserProfile,
    TruncatePipe,
    DeleteConfirmation,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild([])],
  exports: [
    TruncatePipe,
    CommonModule,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    LoaderComponent,
    Button,
    UserProfile,
    Empty,
    MaterialModule,
    DeleteConfirmation,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
