import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
