import { Component } from '@angular/core';
import { NavController, ToastController, normalizeURL } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EscribePage } from '../escribe/escribe';
import { Camera } from '@ionic-native/camera';
import { FirebaseService } from '../service/firebase.service';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-exito',
  templateUrl: 'exito.html'
})
export class ExitoPage {

  constructor(public navCtrl: NavController) {

  }

 

  goBackToCheck() {
      this.navCtrl.parent.select(1);
   }

   


}
