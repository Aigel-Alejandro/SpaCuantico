import { Component, OnInit, Input } from '@angular/core';
import { ApisDbService } from 'src/app/services/apis-db.service';

import { ModalController } from '@ionic/angular';
import { Music } from 'src/app/interface/all-interface';

@Component({
  selector: 'app-modal-audio',
  templateUrl: './modal-audio.page.html',
  styleUrls: ['./modal-audio.page.scss'],
})


export class ModalAudioPage implements OnInit {
  track: Music = {};
  @Input() id!: string;
  @Input() srcaudios!: string;

  audio = new Audio();
  
  constructor( private apiService: ApisDbService, private modalCtrl: ModalController ) { }

  ngOnInit() {
    this.TrackInfo();
    // console.log( this.srcaudios );
    // this.play();    
  }

  close(){
    this.modalCtrl.dismiss();   
    this.audio.pause();
  }

  // play(){
      // this.audio.src = this.srcaudios;
      // this.audio.load();
      // this.audio.play();
  // }

  TrackInfo(){
    this.apiService.track( this.id ).subscribe( response => {
      this.track = response;

      console.log(this.track.archivo);
      
      this.audio.src = 'https://spacuantico.com/files/multimedia/'+this.track.archivo;
      this.audio.load();
      this.audio.play();

    });
  }

}