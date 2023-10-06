import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'mentor-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  toggleNavbar() {
    const navbar = this.elRef.nativeElement.querySelector('#navbar');
    if (navbar.classList.contains('navbar-mobile')) {
      this.renderer.removeClass(navbar, 'navbar-mobile');
      this.renderer.addClass(navbar, 'navbar');
    } else {
      this.renderer.removeClass(navbar, 'navbar');
      this.renderer.addClass(navbar, 'navbar-mobile');
    }

    const toggleBtn = this.elRef.nativeElement.querySelector('.mobile-nav-toggle');
    if (toggleBtn.classList.contains('bi-list')) {
      this.renderer.removeClass(toggleBtn, 'bi-list');
      this.renderer.addClass(toggleBtn, 'bi-x');
    } else {
      this.renderer.addClass(toggleBtn, 'bi-list');
      this.renderer.removeClass(toggleBtn, 'bi-x');
    }
  }

}
