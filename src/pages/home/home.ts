import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChequeaPage } from '../chequea/chequea';
import { ManualPage } from '../manual/manual';
import { PresentacionPage } from '../presentacion/presentacion';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

tab1Uri = PresentacionPage;
tab2Uri = ChequeaPage;
tab3Uri = ManualPage;

  constructor(public navCtrl: NavController, translate: TranslateModule) {

  }

}
