import { UserDto } from './../../../services/user/Dto/user.dto';
import { JwtService } from './../../../services/utils/jwt.service';
import { BrowserApiService } from './../../../services/utils/browser.api.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/app/app.state';
import * as authSelectors from '../../auth/state/auth/auth.selector';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'learnal-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public user$ = this.store.select(authSelectors.selectUser);
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
