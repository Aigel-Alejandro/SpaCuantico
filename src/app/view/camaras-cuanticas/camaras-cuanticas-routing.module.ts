import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamarasCuanticasPage } from './camaras-cuanticas.page';

const routes: Routes = [
  {
    path: '',
    component: CamarasCuanticasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamarasCuanticasPageRoutingModule {}
