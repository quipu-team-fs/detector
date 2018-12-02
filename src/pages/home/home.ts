import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChequeaPage } from '../chequea/chequea';
import { ManualPage } from '../manual/manual';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

tab1Root = ChequeaPage;
tab2Root = ManualPage;

  constructor(public navCtrl: NavController, translate: TranslateModule) {

  }

}
