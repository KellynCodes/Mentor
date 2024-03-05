import { DOCUMENT } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'learnal-empty',
  templateUrl: './empty.html',
})
export class Empty {
  document = inject(DOCUMENT);
  @Input() isNotEnrolled: boolean = false;
  @Input() title: string = '';
  @Input() message: string = '';
  ngOnInit() {
    initFlowbite();
  }
  reloadPage(): void {
    this.document.location.reload();
  }
}
