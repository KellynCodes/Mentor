import { BrowserApiService } from './../../../../core/services/utils/browser.api.service';
import { AppState } from './../../../../core/state/app/app.state';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import * as authSelector from '../../../../core/state/auth/auth.selector';
@Component({
  selector: 'learnal-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public user$ = this.store.select(authSelector.selectUser);
  isNavbarOpen = false;
  adminDashboardLink: string = environment.adminDashboardLink;

  constructor(
    private store: Store<AppState>,
    private browserApiService: BrowserApiService
  ) {}

  toggleNavbar() {
    if (this.browserApiService.isBrowser) {
      if (window.innerWidth < 992) {
        this.isNavbarOpen = !this.isNavbarOpen;
      }
    }
  }
}
