import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAudioPageRoutingModule } from './modal-audio-routing.module';

import { ModalAudioPage } from './modal-audio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAudioPageRoutingModule
  ],
  declarations: [ModalAudioPage]
})
export class ModalAudioPageModule {}
