import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAudioPage } from './modal-audio.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAudioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAudioPageRoutingModule {}
