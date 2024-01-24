import { JwtService } from './services/utils/jwt.service';
import { AfterRenderPhase, Component, afterRender } from '@angular/core';
import * as Aos from 'aos';
import { BrowserApiService } from './services/utils/browser.api.service';
import PureCounter from '@srexi/purecounterjs';
import { Router } from '@angular/router';

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
    afterRender(
      () => {
        Aos.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true,
          mirror: false,
        });
        new PureCounter();
      },
      { phase: AfterRenderPhase.Write }
    );
  }

  ngOnInit(): void {
    this.jwtService.CheckUser();
  }
}
