import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrupalesPageRoutingModule } from './grupales-routing.module';

import { GrupalesPage } from './grupales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrupalesPageRoutingModule
  ],
  declarations: [GrupalesPage]
})
export class GrupalesPageModule {}
