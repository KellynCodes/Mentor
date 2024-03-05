import jwtDecode from 'jwt-decode';
import { Injectable } from '@angular/core';
import { User } from '../user/Dto/user.dto';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app/app.state';
import { LoginSuccessDto } from '../auth/Dto/LoginSuccessDto';
import { setErrorMessage } from '../../state/shared/shared.action';
import { GetUserSuccess } from '../../state/auth/auth.action';
import { BrowserApiService } from './browser.api.service';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  private user: any | null = this.browserApiService.getItem('authUser');
  constructor(
    private browserApiService: BrowserApiService,
    private store: Store<AppState>
  ) {}

  public CheckUser(): User | null {
    console.log(this.user)
    const authUser: LoginSuccessDto = JSON.parse(this.user);
    this.store.dispatch(GetUserSuccess(authUser));
    return authUser?.user!;
  }

  public decodeJwtToken(loginSuccess: LoginSuccessDto): User | null {
    try {
      const decodedToken: User = jwtDecode(loginSuccess.accessToken!);
      const userSession: LoginSuccessDto = {
        accessToken: loginSuccess.accessToken,
        refreshToken: loginSuccess.refreshToken,
        expiryTimeStamp: loginSuccess.expiryTimeStamp,
        user: decodedToken,
      };
      const authUser: string = JSON.stringify(userSession);
      this.browserApiService.setItem('authUser', authUser);
      return decodedToken;
    } catch (error) {
      setTimeout(() => {
        this.store.dispatch(
          setErrorMessage({
            message:
              'Something unexpected happened while saving your session please try again.',
            isSuccessful: false,
          })
        );
      }, 3000);
      return null;
    }
  }
}
