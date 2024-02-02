import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, exhaustMap, take } from 'rxjs';
import { AppState } from '../../core/state/app/app.state';
import { Store } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { selectToken } from '../state/auth/auth.selector';

@Injectable({
  providedIn: 'root',
})
export class RequestInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store.select(selectToken).pipe(
      take(1),
      exhaustMap((token) => {
        console.log(`${environment.apiUrl}/${request.url}`);
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
