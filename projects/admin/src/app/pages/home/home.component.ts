import { Component } from '@angular/core';
import { BrowserApiService } from '../../services/utils/browser.api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'learnal-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [RouterLink],
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private browserApiService: BrowserApiService) {}
}
