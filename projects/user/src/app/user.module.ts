import { NgModule } from '@angular/core';
import { UserRoutingModule } from './routes/user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './dashboard/components/footer/footer.component';
import { FaqsComponent } from './dashboard/components/faqs/faqs.component';
import { NotFoundComponent } from './dashboard/components/not-found/not-found.component';
import { SidebarComponent } from './dashboard/components/sidebar/sidebar.component';
import { ContactComponent } from './dashboard/pages/contact/contact.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { NavbarComponent } from './dashboard/components/navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    FaqsComponent,
    NotFoundComponent,
    SidebarComponent,
    ContactComponent,
    DashboardComponent,
    HomeComponent,
  ],
  imports: [UserRoutingModule],
})
export class UserModule {}
