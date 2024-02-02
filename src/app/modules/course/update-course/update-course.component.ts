import { CourseResponseDto } from '../../../../core/services/course/Dto/course-response.dto';
import { CourseService } from '../../../../core/services/course/course.service';
import { Component } from '@angular/core';
import * as jsonpatch from 'fast-json-patch';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/state/app/app.state';
import * as courseActions from '../../../../core/state/course/action';

@Component({
  selector: 'learnal-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css'],
})
export class UpdateCourseComponent {
  public originalCourse!: CourseResponseDto | null;
  public courseForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.courseForm = this.fb.group({
      name: [''],
      price: [null],
      description: [''],
      createdBy: [''],
      category: [''],
      courseFile: [null],
      fileType: [null],
    });
  }

  getCourse(id: string): void {
    this.courseService.getCourse(id).pipe(
      map((course) => {
        this.originalCourse = course?.data!;
      })
    );
  }

  onFileChange(event: Event): void {}

  getFormControl(name: string) {
    return this.courseForm.get(name);
  }

  onSubmit(): void {
    const updatedCourse: CourseResponseDto = this.courseForm.value;
    if (this.originalCourse == updatedCourse) {
      alert('No changes made');
    }
    const model: jsonpatch.Operation[] = jsonpatch.compare(
      this.originalCourse!,
      updatedCourse
    );

    this.store.dispatch(
      courseActions.UpdateCoursePath({ course: model, IsLoading: true })
    );
  }
}
