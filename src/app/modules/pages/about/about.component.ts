import { AfterRenderPhase, Component, afterRender } from '@angular/core';
import PureCounter from '@srexi/purecounterjs';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'learnal-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  swiperConfig: SwiperOptions = {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  };
  constructor() {
    afterRender(() => {}, { phase: AfterRenderPhase.Write });
  }
}
