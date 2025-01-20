import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BadPageRoutingModule } from './bad-routing.module';

import { BadPage } from './bad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadPageRoutingModule
  ],
  declarations: [BadPage]
})
export class BadPageModule {}
