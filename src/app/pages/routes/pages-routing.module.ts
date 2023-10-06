import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { pageRoute } from './page.routing';

@NgModule({
  imports: [RouterModule.forChild(pageRoute)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
