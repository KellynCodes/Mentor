import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { LoaderComponent } from './loader/loader.component';
import { ButtonComponent } from './button/button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AlertComponent, LoaderComponent, ButtonComponent],
  imports: [CommonModule, RouterModule.forChild([])],
  exports: [AlertComponent, LoaderComponent, ButtonComponent],
})
export class SharedModule {}
