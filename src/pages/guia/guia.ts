import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-guia',
  templateUrl: 'guia.html'
})
export class GuiaPage {

	slides = [
	    {
	      description: "",
	      image: "../../assets/imgs/slides/1.png",
	    },
	    {
	      description: "Identifica y compara los elementos de seguridad en tiempo real",
	      image: "../../assets/imgs/slides/2.png",
	    },
	    {
	      description: "La mejor forma de aprender a verificar billetes y monedas",
	      image: "../../assets/imgs/slides/3.png",
	    }
	  ];

  constructor(public navCtrl: NavController) {

  }

  goToOtherPage() {
      this.navCtrl.push(HomePage);
   }

}
