import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChequeaPage } from '../chequea/chequea';

@Component({
  selector: 'page-presentacion',
  templateUrl: 'presentacion.html'
})
export class PresentacionPage {


noticias = [
	    {
	      description: "Inversión extranjera creció y llegó a US$ 2171 millones",
	      image: "../../assets/imgs/noticias/1.png",
	    },
	    {
	      description: "Remesas del tercer trimestre alcanzan monto más alto desde 1990",
	      image: "../../assets/imgs/noticias/2.png",
	    },
	    {
	      description: "Empleo formal en el sector privado creció 4.7 en el trimestre",
	      image: "../../assets/imgs/noticias/3.png",
	    }
];

  constructor(public navCtrl: NavController) {

  }


   switchTabs() {
     this.navCtrl.parent.select(1);
   }

}
