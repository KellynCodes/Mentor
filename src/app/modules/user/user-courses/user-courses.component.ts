import { AppState } from '../../../state/app/app.state';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CourseseActions from '../../course/state/action';
import * as courseSelector from '../../course/state/selector';
import { UserDto } from '../../../services/user/Dto/user.dto';
import { JwtService } from '../../../services/utils/jwt.service';

@Component({
  selector: 'learnal-user-courses',
  templateUrl: './user-courses.component.html',
  styleUrls: ['./user-courses.component.css'],
})
export class UserCoursesComponent {
  public courses$ = this.store.select(courseSelector.getCourse);
  public IsCourseLoading$ = this.store.select(courseSelector.IsCourseLoading);
  public errorMessage$ = this.store.select(courseSelector.errorMessage);

  public user: UserDto = this.jwtService.getUser();
  public userName: string = this.user.unique_name[0];
    constructor(private store: Store<AppState>, private jwtService: JwtService) { }

 
}
