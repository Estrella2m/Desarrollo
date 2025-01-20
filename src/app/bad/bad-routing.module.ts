import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BadPage } from './bad.page';

const routes: Routes = [
  {
    path: '',
    component: BadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadPageRoutingModule {}
