import { ContactService } from '../../services/contact/contact.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import * as contactActions from './action';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { AppState } from '../../../core/state/app/app.state';

@Injectable({ providedIn: 'root' })
export class ContactEffect {
  constructor(
    private actions$: Actions,
    private contactService: ContactService,
    private store: Store<AppState>,
    private alert: ToastrService
  ) {}

  // Contact request
  ContactRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(contactActions.Contact),
      exhaustMap((model) =>
        this.contactService.contact(model).pipe(
          map((res) => {
            if (res.isSuccessful) {
              this.alert.success(res.message, 'Successful.');
            }
            return contactActions.ContactSuccess();
          }),
          catchError((error) => {
            return of(
              contactActions.ContactFailure({
                IsLoading: false,
                message: error?.error?.message,
              })
            );
          })
        )
      )
    )
  );

  ContactFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(contactActions.ContactFailure),
        map((res) => {
          this.alert.error(`${res.error.message}`, 'Error');
        })
      ),
    { dispatch: false }
  );
}
