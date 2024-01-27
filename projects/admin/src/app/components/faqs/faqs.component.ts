import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'learnal-faqs',
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css',
  standalone: true,
  imports: [RouterLink],
})
export class FaqsComponent {}
