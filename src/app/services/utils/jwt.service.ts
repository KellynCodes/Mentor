import { Inject, Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { UserDto } from '../user/Dto/user.dto';
import { localStorageToken } from '../../extension/local.storage';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app/app.state';
import { LoginSuccessDto } from '../auth/Dto/LoginSuccessDto';
import { setErrorMessage } from '../../state/shared/shared.action';
import { GetUserSuccess } from '../../modules/auth/state/auth/auth.action';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  private user: any | null = this.localStorage.getItem('authUser');
  constructor(
    @Inject(localStorageToken) private localStorage: Storage,
    private store: Store<AppState>
  ) {}

  public getUser(): UserDto {
    const authUser: LoginSuccessDto = JSON.parse(this.user);
    return authUser?.user!;
  }

  public CheckUser(): UserDto | undefined {
    const authUser: LoginSuccessDto = JSON.parse(this.user);
    this.store.dispatch(GetUserSuccess(authUser));
    return authUser?.user!;
  }

  public decodeJwtToken(loginSuccess: LoginSuccessDto): UserDto | null {
    try {
      const decodedToken: UserDto = jwt_decode(loginSuccess.accessToken!);
      const userSession: LoginSuccessDto = {
        accessToken: loginSuccess.accessToken,
        refreshToken: loginSuccess.refreshToken,
        expiryTimeStamp: loginSuccess.expiryTimeStamp,
        user: decodedToken,
      };
      const authUser: string = JSON.stringify(userSession);
      this.localStorage.setItem('authUser', authUser);
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
      // todo log the error to a file.
      return null;
    }
  }
}
