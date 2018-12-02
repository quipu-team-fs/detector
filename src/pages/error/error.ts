import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-error',
  templateUrl: 'error.html'
})
export class ErrorPage {

  constructor(public navCtrl: NavController) {

  }

 

  goBackToCheck() {
      this.navCtrl.parent.select(1);
   }

   


}
