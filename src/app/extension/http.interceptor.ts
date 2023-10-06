import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpStatusCode,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, exhaustMap, from, take } from 'rxjs';
import { selectToken } from '../auth/state/auth/auth.selector';
import { AuthFailure } from '../auth/state/auth/auth.action';
import { AuthService } from '../services/auth/auth.service';
import { AppState } from '../state/app/app.state';
import { Store } from '@ngrx/store';
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

        return next.handle(clonedRequest).pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.status === HttpStatusCode.Unauthorized) {
              this.authService.logout();
            }
            this.store.dispatch(AuthFailure(error));
            return next.handle(request);
          })
        );
      }),
      catchError(() => {
        // Handle the case where location is not available
        // You can still send the request with just the token and browser name headers
        //const clonedRequest = request.clone({ headers });
        return next.handle(request);
      })
    );
  }
}
