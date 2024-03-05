import { AppState } from './../../../core/state/app/app.state';
import { AfterViewInit, Component, DestroyRef, inject } from '@angular/core';
import { selectUser } from '../../../core/state/auth/auth.selector';
import { Page } from '../../../core/types/enum/Page';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AlertService } from '../../../core/services/alert/alert.service';

@Component({
  selector: 'learnal-sidebar',
  template: ` <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50">
    <ul class="space-y-2 font-medium">
      <li>
        <a
          routerLink="/dashboard"
          class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <svg
            class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 21"
          >
            <path
              d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
            />
            <path
              d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
            />
          </svg>
          <span class="ms-3">Dashboard</span>
        </a>
      </li>
      <li>
        <a
          routerLink="notifications"
          class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
        >
          <svg
            class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"
            />
          </svg>
          <span class="flex-1 ms-3 whitespace-nowrap">Notifications</span>
          <span
            *ngIf="isNotificationLength"
            class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full"
            >{{ notificationLength }}</span
          >
        </a>
      </li>
      <li>
        <a
          routerLink="/dashboard"
          fragment="courses"
          class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
        >
          <ng-icon name="faSolidAddressBook" color="#6c6b6bdc" size="1.5rem" />
          <span class="flex-1 ms-3 whitespace-nowrap">Courses</span>
        </a>
      </li>
      <li>
        <a
          routerLink="/dashboard"
          fragment="activities"
          class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
        >
          <ng-icon name="faChartBar" size="1.5rem" color="gray" />
          <span class="flex-1 ms-3 whitespace-nowrap">Activity</span>
        </a>
      </li>
      <li>
        <a
          routerLink="/dashboard/account/{{ (user$ | async)?.userId }}"
          class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
        >
          <svg
            class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path
              d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"
            />
          </svg>
          <span class="flex-1 ms-3 whitespace-nowrap ">Account</span>
        </a>
      </li>
    </ul>
  </div>`,
})
export class SideBar implements AfterViewInit {
  public page = Page;
  private store = inject(Store<AppState>);
  private router = inject(Router);
  private _destroyRef = inject(DestroyRef);
  user$ = this.store.select(selectUser);
  public isNotificationLength: boolean = false;
  public notificationLength: number = 0;
  private alertService = inject(AlertService);

  ngAfterViewInit(): void {
    this.alertService?.notificationLength$
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((length) => {
        this.notificationLength = length;
        this.isNotificationLength = length > 0;
      });
  }

  scrollToComponent(url?: Page, fragment?: string) {
    this.router.navigate([`/dashboard/${url || null}`], { fragment: fragment });
  }
}
