import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'mentor-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isNavbarOpen = false;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }


  toggleNavbar() {
    if (window.innerWidth < 992) {
      this.isNavbarOpen = !this.isNavbarOpen;
    }
  }

}
