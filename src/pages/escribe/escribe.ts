import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { ExitoPage } from '../exito/exito';
import { ErrorPage } from '../error/error';

@Component({
  selector: 'page-escribe',
  templateUrl: 'escribe.html'
})
export class EscribePage {

	codigo:"";
	dataValue = {
			id:0,
			currency:"",
			imageA:"",
			imageB:""
	};
	monedaCollection = [
		{
			id:2,
			currency:"20",
			imageA:"../../assets/imgs/currency/20-circle-a.png",
			imageB:"../../assets/imgs/currency/20-circle-b.png"
		},
		{
			id:3,
			currency:"100",
			imageA:"../../assets/imgs/currency/100-circle-a.png",
			imageB:"../../assets/imgs/currency/100-circle-b.png"
		}
	];

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams, 
  	public alertCtrl: AlertController,
  	private http: HTTP) {
  	this.dataValue = this.monedaCollection[parseInt(navParams.get('item')) - 2];
  }

  makeRequest(){
  	const context = this;
  	const codigoData = this.codigo;
  	const dataParse = {
  		denominacion:context.dataValue.currency,
  		numeracion:codigoData.toUpperCase(),
  	};

  	const dataFinalParse = JSON.stringify(dataParse);
  	console.log("dataFinalParse", dataFinalParse);
  	this.http.post('http://ec2-34-220-86-67.us-west-2.compute.amazonaws.com/valida-billete', dataParse, {})
  	  .then(data => {

  	  	const message = data.data;
  	  	const parseData = JSON.parse(message);
  	    //console.log("yayaya", data);
  	    if(parseData.mensaje === "Su numeración existe en nuestro sistema"){
  	    	// Es falso
          context.navCtrl.push(ErrorPage);
  	    } else {
  	    	// No es falso
          context.navCtrl.push(ExitoPage);
  	    }
  	    

  	  })
  	  .catch(error => {

  	    //console.log("yayaya", error);
  	    const alertError = context.alertCtrl.create({
  	          title: 'Error!',
  	          subTitle: 'Error es ' + JSON.stringify(error, Object.getOwnPropertyNames(error)),
  	          buttons: ['Entendido']
  	    });
  	    alertError.present();

  	  });
  }

  sendCodigo(){

  	if(this.codigo.length !== 9){
  		const alert = this.alertCtrl.create({
  		      title: 'Ups!',
  		      subTitle: 'Recuerda que el código debe tener 9 dígitos',
  		      buttons: ['Entendido']
  		});
  		alert.present();
  	} else {
  		this.makeRequest();
  	}
  	
  }


}
