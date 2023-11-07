import { JwtService } from './services/utils/jwt.service';
import { Component } from '@angular/core';
import PureCounter from '@srexi/purecounterjs';
import * as Aos from 'aos';
import * as sharedSelectors from './state/shared/shared.selector';
import { Store } from '@ngrx/store';
import { AppState } from './state/app/app.state';

@Component({
  selector: 'learnal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public errorMessage$ = this.store.select(sharedSelectors.getErrorMessage);
  public successMessage$ = this.store.select(sharedSelectors.getSuccessMessage);
  public IsSuccessful = this.store.select(sharedSelectors.getIsSuccessful);

  constructor(private jwtService: JwtService, private store: Store<AppState>) {}

  ngOnInit(): void {
    //Get user from local storage.
    this.jwtService.CheckUser();

    //aos animation initialization.
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });

    //counter
    new PureCounter();
  }
}
