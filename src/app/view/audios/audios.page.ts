import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ApisDbService } from 'src/app/services/apis-db.service';
import { ModalAudioPage } from '../elements/modal-audio/modal-audio.page';


// Variable para las dieferentes secciones y canciones junto con sus albunes
export interface contenido {
  titulo?: string
  tracks: Track[]
  coleccion?: string
}

export interface Track {
  id: string
  nombre: string
  descripcion: string
  archivo: string
  imagen: string
  fecha_carga: string
  tipo: string
  featured?: boolean
  gratuito?: string
  coleccion: string
  orden?: string
}

@Component({
  selector: 'app-audios',
  templateUrl: './audios.page.html',
  styleUrls: ['./audios.page.scss'],
})
export class AudiosPage implements OnInit {
  paramInter = null;
  seccionsAndTrancks: contenido[] = [];

  constructor( private apiService: ApisDbService, private navCtrl: NavController, private modalCtrl: ModalController ) { }

  ngOnInit() {
    this.secionsAndTracks();
  }

  secionsAndTracks(){
    this.apiService.tracksDash('1').subscribe( response => {
      this.seccionsAndTrancks = response;
    });
  }

  // Manda a la pagina de los audios
  audios(){
    this.navCtrl.navigateRoot('audios', { animated: true });
  }

  // Manda a la pagina de los podtcast
  podcast(){
    this.navCtrl.navigateRoot('podcast', { animated: true });
  }

  // Mandar a la pagina de las camaras cuanticas
  grupales(){
    this.navCtrl.navigateRoot('grupales', { animated: true });
  }

  // Mandar a la pagina de las camaras cuanticas
  cuanticas(){
    this.navCtrl.navigateRoot('camaras-cuanticas', { animated: true });
  }

  // Mandar a la pagina del dashboard
  dashboard(){
    this.navCtrl.navigateRoot('dashboard', { animated: true });
  }
  
  // Mandar a la pagina de las clases
  clases(){
    this.navCtrl.navigateRoot('clases', { animated: true });
  }

  // Abre el modal para la reproduccion del audio
  async showModalAudio( id: string, srcaudios: string ){

    const modal =  await this.modalCtrl.create({
      component: ModalAudioPage,
      componentProps: {
        id,
        srcaudios,
      }
    });
    return await modal.present();

  }

}
