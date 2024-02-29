import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { PagesRoutingModule } from './routes/pages-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SwiperDirective } from '../../../core/directives/swiper';
import { SharedModule } from '../components/shared.module';
import { MaterialModule } from '../material/material.module';
import { NgOptimizedImage } from '@angular/common';
import { PageIndex } from './index';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SwiperDirective,
    PageIndex,
  ],
  imports: [NgOptimizedImage, PagesRoutingModule, MaterialModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PagesModule {}
