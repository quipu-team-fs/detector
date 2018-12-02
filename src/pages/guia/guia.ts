import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChequeaPage } from '../chequea/chequea';
import { ManualPage } from '../manual/manual';

@Component({
  selector: 'page-guia',
  templateUrl: 'guia.html'
})
export class GuiaPage {

tab1Root = ChequeaPage;
tab2Root = ManualPage;

  constructor(public navCtrl: NavController) {

  }

}
