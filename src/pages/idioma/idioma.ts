import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GuiaPage } from '../guia/guia';

@Component({
  selector: 'page-idioma',
  templateUrl: 'idioma.html'
})
export class IdiomaPage {

	saludoBlock = 'saludo-block';
	saludoTexto = "Bienvenido";
	timerArr = [];

  constructor(public navCtrl: NavController) {
  	
  }

  goToOtherPage() {
      this.navCtrl.push(GuiaPage);
   }

  ionViewDidEnter(){
  	const context = this;
  	setTimeout(()=>{
  		context.alternateText();
  	}, 15);
  }

  ionViewWillLeave(){
  	for (let i = 0; i < this.timerArr.length; i++) {
  		clearTimeout(this.timerArr[i]);
  	}
  }


  alternateText(){
  	const context = this;
  	this.saludoTexto = "Bienvenido";
  	this.saludoBlock  = 'saludo-block active';
  	this.timerArr[0] = setTimeout(()=>{
  		console.log("Llego a 1");
  		context.saludoBlock  = 'saludo-block';
  	}, (500 + 2000));
  	this.timerArr[1] = setTimeout(()=>{
  		console.log("Llego a 2");
  		context.saludoTexto = "Runi Sima";
  		context.saludoBlock  = 'saludo-block active';
  	}, (500 + 2000 + 500));
  	this.timerArr[2] = setTimeout(()=>{
  		console.log("Llego a 3");
  		context.saludoBlock  = 'saludo-block';
  	}, (500 + 2000 + 500 + 500 + 2000));
  	this.timerArr[3] = setTimeout(()=>{
  		context.saludoTexto = "Welcome";
  		context.saludoBlock  = 'saludo-block active';
  	}, (500 + 2000 + 500 + 500 + 2000 + 500));
  	this.timerArr[4] = setTimeout(()=>{
  		context.saludoBlock  = 'saludo-block';
  	}, (500 + 2000 + 500 + 500 + 2000 + 500 + 500 + 2000));
  	this.timerArr[5] = setTimeout(()=>{
  		context.alternateText();
  	}, (500 + 2000 + 500 + 500 + 2000 + 500 + 500 + 2000 + 500));
  }

}
