import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import PureCounter from '@srexi/purecounterjs';
import * as Aos from 'aos';
import Swiper from 'swiper';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'mentor-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;
  swiperConfig: SwiperOptions = {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  };
  constructor() { }

  ngOnInit(): void {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
    new PureCounter();
  }

}
