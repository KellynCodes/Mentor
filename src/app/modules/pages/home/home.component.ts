import { BrowserApiService } from '../../../services/utils/browser.api.service';
import { AfterRenderPhase, Component, afterRender } from '@angular/core';
import { PaginationQueryDto } from '../../../data/Dto/shared/request.query.dto';
import { Store } from '@ngrx/store';
import * as courseActions from '../../../modules/course/state/action';
import * as courseSelector from '../../../modules/course/state/selector';
import * as authSelector from '../../../modules/auth/state/auth/auth.selector';
import { AppState } from '../../../state/app/app.state';

@Component({
  selector: 'learnal-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public courses$ = this.store.select(courseSelector.getCourse);
  public IsCourseLoading$ = this.store.select(courseSelector.IsCourseLoading);
  public errorMessage$ = this.store.select(courseSelector.errorMessage);
  public authToken$ = this.store.select(authSelector.selectToken);
  public user$ = this.store.select(authSelector.selectUser);

  constructor(
    private store: Store<AppState>,
    private browserApiService: BrowserApiService
  ) {
    afterRender(() => {}, { phase: AfterRenderPhase.Read });
  }

  ngOnInit(): void {
   
    //fetch popular courses
    this.getCourses();
  }

  getCourses(
    keyword: string = '',
    pageSize: number = 10,
    pageNumber: number = 1,
    courseLikes: number = 10
  ): void {
    const query: PaginationQueryDto = {
      keyword: keyword,
      pageNumber: pageNumber,
      pageSize: pageSize,
      courseLikes: courseLikes,
    };
    this.store.dispatch(
      courseActions.LoadCourse({ query: query, IsLoading: true })
    );
  }
}
