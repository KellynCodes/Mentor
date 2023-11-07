import { AppState } from '../../../state/app/app.state';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CourseseActions from '../../course/state/action';
import * as courseSelector from '../../course/state/selector';

@Component({
  selector: 'learnal-user-courses',
  templateUrl: './user-courses.component.html',
  styleUrls: ['./user-courses.component.css'],
})
export class UserCoursesComponent {
  public courses$ = this.store.select(courseSelector.getCourse);
  public IsCourseLoading$ = this.store.select(courseSelector.IsCourseLoading);
  public errorMessage$ = this.store.select(courseSelector.errorMessage);
  constructor(private store: Store<AppState>) { }

 
}
