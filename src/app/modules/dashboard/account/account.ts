import { selectUser } from './../../../../core/state/auth/auth.selector';
import { UserResponseDto } from '../../../../core/services/user/Dto/user.dto';
import { Component, DestroyRef, inject } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { UserService } from '../../../../core/services/user/user.service';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/state/app/app.state';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'learnal-account',
  styles: `
  .new-course-grid{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32%, 1fr));
  }
@media(-width: 500px){
  .new-course-grid{
     grid-template-columns: 1fr;
}
  }
  .custom-grid{
    display: grid; grid-template-columns: repeat(auto-fit, minmax(196px, 85px));
  }`,
  templateUrl: './account.html',
})
export class UserAccount {
  _destroyRef = inject(DestroyRef);
  store = inject(Store<AppState>);
  user$ = this.store.select(selectUser);
  user: UserResponseDto | null = null;
  userId: string;
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {
    this.userId = this.activatedRoute.snapshot.params['userId'];
  }

  ngOnInit(): void {
    initFlowbite();
    this.userService
      .getUser(this.userId)
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((res) => {
        return (this.user = res.data!);
      });
  }

  logout(): void {
    this.authService.logout();
  }

  followAuthor(): void {
    //const user = loggedInUser = {}
    //dispatch follow author action...
  }
}
