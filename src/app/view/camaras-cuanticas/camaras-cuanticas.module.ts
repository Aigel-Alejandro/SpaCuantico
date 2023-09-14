import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamarasCuanticasPageRoutingModule } from './camaras-cuanticas-routing.module';

import { CamarasCuanticasPage } from './camaras-cuanticas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamarasCuanticasPageRoutingModule
  ],
  declarations: [CamarasCuanticasPage]
})
export class CamarasCuanticasPageModule {}
