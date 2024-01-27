import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, exhaustMap, take } from 'rxjs';
import { selectToken } from '../modules/auth/state/auth/auth.selector';
import { AppState } from '../state/app/app.state';
import { Store } from '@ngrx/store';
import { setErrorMessage } from '../state/shared/shared.action';
import { ErrorResult } from '../data/Dto/shared/error.result';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class JwtTokenInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store.select(selectToken).pipe(
      take(1),
      exhaustMap((token) => {
        if (!token) {
          const clonedRequest = request.clone({
            url: `${environment.apiUrl}/${request.url}` || request.url,
          });
          return next.handle(clonedRequest);
        }
        const headers = request.headers.set('Authorization', `Bearer ${token}`);
        const clonedRequest = request.clone({
          headers,
          url: `${environment.apiUrl}/${request.url}` || request.url,
        });

        return next.handle(clonedRequest);
      })
    );
  }
}
