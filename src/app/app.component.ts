import { JwtService } from './services/utils/jwt.service';
import { Component, afterRender } from '@angular/core';
import * as Aos from 'aos';
import { BrowserApiService } from './services/utils/browser.api.service';

@Component({
  selector: 'learnal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private jwtService: JwtService,
    private browserService: BrowserApiService
  ) {
    afterRender(() => {
      Aos.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
      });
    });
  }

  ngOnInit(): void {
    //Get user from local storage.
    this.jwtService.CheckUser();
  }
}
