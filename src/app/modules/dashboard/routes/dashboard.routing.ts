import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard.component';
import { Alerts } from '../alert';
import { UserAccount } from '../account/account';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    title: 'Dashboard',
    children: [
      {
        path: 'notifications',
        component: Alerts,
        title: 'Notifications',
      },
      {
        path: 'account/:userId',
        component: UserAccount,
        title: 'Account',
      },
    ],
  },
];
