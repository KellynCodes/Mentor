import { BrowserApiService } from './../../../services/utils/browser.api.service';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/app/app.state';
import * as authSelectors from '../../auth/state/auth/auth.selector';

@Component({
  selector: 'learnal-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public user$ = this.store.select(authSelectors.selectToken);
  isNavbarOpen = false;
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
