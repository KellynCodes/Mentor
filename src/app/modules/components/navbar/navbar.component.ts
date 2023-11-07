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
  public user$ = this.store.select(authSelectors.selectUser);
  isNavbarOpen = false;
  constructor(private store: Store<AppState>) {}

  toggleNavbar() {
    if (window.innerWidth < 992) {
      this.isNavbarOpen = !this.isNavbarOpen;
    }
  }
}
