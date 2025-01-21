import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonmenuPageRoutingModule } from './ionmenu-routing.module';

import { IonmenuPage } from './ionmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonmenuPageRoutingModule
  ],
  declarations: [IonmenuPage]
})
export class IonmenuPageModule {}
