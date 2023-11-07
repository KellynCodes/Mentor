import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'learnal-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() customClasses: string = '';
  @Input() link?: string = '';
  @Input() backgroundStyles?: string = '';
}
