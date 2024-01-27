import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './routes/pages-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SwiperDirective } from '../../directives/swiper';
import { SharedModule } from '../components/shared.module';
import { MaterialModule } from '../material/material.module';
import { NgOptimizedImage } from '@angular/common';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SwiperDirective,
    IndexComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    PagesRoutingModule,
    MaterialModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PagesModule {}
