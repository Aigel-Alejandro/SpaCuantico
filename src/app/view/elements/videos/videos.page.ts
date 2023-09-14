import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Music } from 'src/app/interface/all-interface';
import { ApisDbService } from 'src/app/services/apis-db.service';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})


export class VideosPage implements OnInit {
  
  urlSanitizer: any;
  track: Music = {};
  @Input() id!: string;
  @Input() urlVideo!: string;

  
  constructor( 
    private apiService: ApisDbService,
    private modalCtrl: ModalController,
    private sanitizer: DomSanitizer
    ) { }
    
  ngOnInit() {
    this.TrackInfo();
  }

  close(){
    this.modalCtrl.dismiss();   
  }

  TrackInfo(){
    this.apiService.track( this.id ).subscribe( response => {
      this.track = response;
      this.urlSanitizer = this.sanitizer.bypassSecurityTrustResourceUrl( this.urlVideo );

      console.log( response.descripcion );
      
    });
  }



}
