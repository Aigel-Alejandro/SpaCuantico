import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Music } from '../interface/all-interface';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ApisDbService {

  constructor( private http: HttpClient ) { }

  /* ---------------------------- Servicio de login --------------------------- */
  login( email: string, password: string ){
    
    const dataUser = { email, password }
    return new Promise( resolve => {

      return this.http.post(`${ URL }/users/login_ajax`, dataUser ).
      subscribe( resp => {

        // if( resp == true ){
          
          resolve(true);

        // }else{
        //   resolve(false);
        // }

      });
      
    });
    
  }

  tracksDash( tipoLlamada: string ){

    if( tipoLlamada == '0'){
      return this.http.get<[]>(`${ URL }/musics/get_biblioteca`);
    }else{
      return this.http.get<[]>(`${ URL }/musics/get_biblioteca/${ tipoLlamada }`);
    }
    
    
  }

  track( id: string ){

      return this.http.get<Music>(`${ URL }/Musics/getTrack/${ id }`);
    
  }



}
