import { Component, afterRender } from '@angular/core';
import * as Aos from 'aos';
import * as sharedSelectors from '../../../state/shared/shared.selector';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/app/app.state';

@Component({
  selector: 'learnal-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  public successMessage$ = this.store.select(sharedSelectors.getSuccessMessage);
  public IsSuccessful = this.store.select(sharedSelectors.getIsSuccessful);

  constructor(private store: Store<AppState>) {}
}
