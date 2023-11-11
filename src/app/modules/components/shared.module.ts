import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { LoaderComponent } from './loader/loader.component';
import { ButtonComponent } from './button/button.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [AlertComponent, LoaderComponent, ButtonComponent, SearchComponent],
  imports: [CommonModule, RouterModule.forChild([])],
  exports: [AlertComponent, LoaderComponent, ButtonComponent],
})
export class SharedModule {}
