import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrupalesPage } from './grupales.page';

const routes: Routes = [
  {
    path: '',
    component: GrupalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrupalesPageRoutingModule {}
