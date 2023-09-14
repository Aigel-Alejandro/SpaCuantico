import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor( private toastCtrl: ToastController ) { }

  async presentToast(position: 'top' | 'middle' | 'bottom', message: string ) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      position: position,
    });

    await toast.present();
  }

}
