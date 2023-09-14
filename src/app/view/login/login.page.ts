import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ApisDbService } from 'src/app/services/apis-db.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUser = {
    email       : '',
    password    : '',
    showPassword: false,
  }
  type = 'password';

  constructor(  private UiService: UiService,
                private navCtrl: NavController,
                private apiService: ApisDbService ) { }

  ngOnInit() {
  }

  // Metodo para hacer login
  async login( fLogin: NgForm ){
  
    // Validacion del form 
    if( fLogin.invalid ){ this.UiService.presentToast('top', 'Favor de ingresar los campos requeridos.'); return; }

    const valido = await this.apiService.login( this.loginUser.email, this.loginUser.password );

    if( valido ){
      
      // Navegar a la apalicacion
      this.navCtrl.navigateRoot( 'dashboard', { animated: true } );

    }else{
      
      // No estamos navegando a la aplicacion
      this.UiService.presentToast('top', 'Favor de revisar sus credenciales, son incorrectas.');

    }
  }

  showPass(){
    if( this.type == 'password' ){
      this.type = 'text';
    }else{
      this.type = 'password';
    }

  }

}
