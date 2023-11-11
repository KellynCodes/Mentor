import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpStatusCode,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, exhaustMap, from, take } from 'rxjs';
import { selectToken } from '../modules/auth/state/auth/auth.selector';
import { AuthService } from '../services/auth/auth.service';
import { AppState } from '../state/app/app.state';
import { Store } from '@ngrx/store';
import { setErrorMessage } from '../state/shared/shared.action';
import { ErrorResult } from '../data/Dto/shared/error.result';
// ... other imports ...

@Injectable({
  providedIn: 'root',
})
export class JwtTokenInterceptor implements HttpInterceptor {
  constructor(
    private store: Store<AppState>,
    private authService: AuthService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store.select(selectToken).pipe(
      take(1),
      exhaustMap((token) => {
        if (!token) {
          return next.handle(request);
        }

        const headers = request.headers.set('Authorization', `Bearer ${token}`);
        const clonedRequest = request.clone({ headers });

        return next.handle(clonedRequest);
      }),
      catchError((error) => {
        const errorResponse: ErrorResult = {
          isSuccessful: error?.error?.IsSuccessful,
          message: error?.error?.Message,
          httpStatusCode: error?.error?.HttpStatusCode,
        };
        this.store.dispatch(
          setErrorMessage({
            message: errorResponse.message,
            isSuccessful: errorResponse.isSuccessful,
          })
        );
        return next.handle(request);
      })
    );
  }
}
