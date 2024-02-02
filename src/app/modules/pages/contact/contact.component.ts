import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/state/app/app.state';
import * as contactSelector from '../../../../core/state/page/selector';
import * as contactActions from '../../../../core/state/page/action';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'learnal-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  IsLoading$ = this.store.select(contactSelector.IsContactLoading);
  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    subject: new FormControl('', [Validators.maxLength(500)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(5000),
    ]),
  });

  constructor(private store: Store<AppState>, private alert: ToastrService) {}

  onSubmit(): void {
    if (!this.contactForm.valid) {
      this.alert.error(
        'Provide value for the required inputs.',
        'Invalid Model State'
      );
      return;
    }

    this.store.dispatch(contactActions.Contact({ ...this.contactForm.value }));
    this.contactForm.reset();
  }
}
