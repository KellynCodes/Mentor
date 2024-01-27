import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'learnal-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
})
export class SidebarComponent {
  isAuthenticated: boolean = false;
}
