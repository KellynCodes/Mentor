import { DOCUMENT } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'learnal-course-not-found',
  templateUrl: './course-not-found.html',
})
export class CourseNotFound {
  window = inject(DOCUMENT).defaultView;
  @Input({ required: true }) isNotEnrolled: boolean = false;
  ngOnInit() {
    initFlowbite();
  }
  reloadPage(): void {
    //this.window.reload();
  }
}
