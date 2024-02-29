import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'learnal-loader',
  template: `<div class="loader-container">
    <div class="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <p>{{ contentText }}</p>
  </div> `,
  styleUrl: './loader.component.css',
})
export class LoaderComponent {
  @Input() contentText?: string | null = null ?? 'Loading...';
}
