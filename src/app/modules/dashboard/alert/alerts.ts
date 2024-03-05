import { Component, inject } from '@angular/core';
import { AlertDto } from '../../../../core/services/alert/alert.dto';
import { AlertService } from '../../../../core/services/alert/alert.service';

@Component({
  selector: 'learnal-notification',
  template: `
    <!-- ======= Breadcrumbs ======= -->
    <a
      routerLink="/dashboard"
      class="fixed inset-0 w-screen z-[999] h-screen opacity-5 bg-black"
    ></a>
    <div
      class="fixed overflow-auto z-[1000] inset-0 m-auto h-screen md:h-[80vh] w-[85vw] flex flex-wrap items-center justify-center gap-4 max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8"
    >
      <div class="flex items-center justify-center">
        <h2 class="text-2xl text-bold text-accent mr-6">Notifications</h2>
        <span class="text-base text-normal text-teal-950">
          {{ dateTime }}
        </span>
      </div>
      <a
        routerLink="/dashboard"
        class="absolute right-2 top-2 ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
        aria-label="Close"
      >
        <span class="sr-only">Dismiss</span>
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </a>
      @for(alert of alerts; track alert.id){
      <learnal-alert
        [alertType]="alert.type"
        [message]="alert.message"
        [(showAlert)]="isAlertOpen"
      />
      }@empty{
      <learnal-alert
        alertType="info"
        message="You have no notifications."
        [showAlert]="true"
      />
      }
    </div>
  `,
})
export class Alerts {
  isAlertOpen: boolean = true;
  dateTime: string = new Date().toLocaleString();
  alertService = inject(AlertService);
  public alerts: Array<AlertDto> = [
    {
      id: 'fkadpiruigofeijpd',
      type: 'success',
      message:
        'This is an example of a success message. Check this example here https://kellycodesolution.vercel.app',
    },
    {
      id: 'dfoaifaoire-fjpd',
      type: 'info',
      message:
        'Example of a info message. Check this example here https://kellycodesolution.vercel.app',
    },
    {
      id: 'fafda54rt46-fjpd',
      type: 'warning',
      message:
        'Example of a warning message. Check this example here https://kellycodesolution.vercel.app',
    },
    {
      id: 'i8098uy6uryhe-fjpd',
      type: 'error',
      message:
        'Example of a error message. Check this example here https://angular.dev',
    },
    {
      id: 'dfkadfkaokeohfodhfadfad',
      type: 'error',
      message:
        'This is an example of a error message.  Check this example here https://angular.dev',
    },
  ];

  ngOnInit(): void {
    this.alertService.notificationLength$.next(5);
  }

  ngOnDestroy(): void {}
}
