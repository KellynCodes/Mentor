import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './routes/pages-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SwiperDirective } from '../../lib/directives/swiper';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SwiperDirective
  ],
  imports: [CommonModule, PagesRoutingModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PagesModule {}
