import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChequeaPage } from '../chequea/chequea';
import { ManualPage } from '../manual/manual';
import { ExitoPage } from '../exito/exito';
import { ErrorPage } from '../error/error';
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
tab4Uri = ExitoPage;
tab5Uri = ErrorPage;

  constructor(public navCtrl: NavController, translate: TranslateModule) {

  }

}
