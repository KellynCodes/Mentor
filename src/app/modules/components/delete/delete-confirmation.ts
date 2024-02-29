import { DOCUMENT } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  inject,
} from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'learnal-delete-confirmation',
  templateUrl: 'delete-confirmation.html',
})
export class DeleteConfirmation {
  @Input({ required: true }) buttonText: string = '';
  @Input() className: string = '';
  @Input() message: string = '';
  @Input() itemToDelete: any;
  @Output() deleteFunc = new EventEmitter<void>();

  document = inject(DOCUMENT);
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    initFlowbite();
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'overflow-hidden');
    this.renderer.setStyle(
      this.document.querySelector('div[modal-backdrop]'),
      'display',
      'none'
    );
  }

  emitItemDeletion(): void {
    this.deleteFunc.emit();
  }
}
