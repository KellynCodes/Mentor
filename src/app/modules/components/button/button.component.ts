import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'learnal-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input({ required: true }) label: string = '';
  @Input() customClasses: string = '';
  @Input({ required: true }) link!: string | Array<string>;
}
