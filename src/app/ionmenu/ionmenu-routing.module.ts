import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonmenuPage } from './ionmenu.page';

const routes: Routes = [
  {
    path: '',
    component: IonmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonmenuPageRoutingModule {}
