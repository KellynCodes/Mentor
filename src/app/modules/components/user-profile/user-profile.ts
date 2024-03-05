import { AppState } from './../../../../core/state/app/app.state';
import { UserService } from '../../../../core/services/user/user.service';
import { Component, DestroyRef, Input, inject } from '@angular/core';
import { UserResponseDto } from '../../../../core/services/user/Dto/user.dto';
import { initFlowbite } from 'flowbite';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { selectUser } from '../../../../core/state/auth/auth.selector';
import { Store } from '@ngrx/store';

@Component({
  selector: 'learnal-user-profile',
  templateUrl: './user-profile.html',
})
export class UserProfile {
  _destroyRef = inject(DestroyRef);
  store = inject(Store<AppState>);
  user$ = this.store.select(selectUser);
  user: UserResponseDto | null = null;
  @Input({ required: true }) userId: string = '';
  @Input({ required: true }) buttonLabel: string = '';
  @Input() className: string = '';

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

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
}
