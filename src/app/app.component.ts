import { JwtService } from '../core/services/utils/jwt.service';
import {
  AfterRenderPhase,
  Component,
  ElementRef,
  afterRender,
} from '@angular/core';
import * as Aos from 'aos';
import PureCounter from '@srexi/purecounterjs';

@Component({
  selector: 'learnal-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private jwtService: JwtService,
    private elementRef: ElementRef<HTMLDivElement>
  ) {
    afterRender(
      () => {
        this.handlePreloader();
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

  handlePreloader(): void {
    const preloader: HTMLDivElement | null =
      this.elementRef.nativeElement.querySelector('#preloader');
    if (!preloader) {
      return;
    }

    preloader.style.display = 'none';
  }
}
