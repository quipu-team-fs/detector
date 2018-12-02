import { Component } from '@angular/core';
import { NavController, ToastController, normalizeURL } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EscribePage } from '../escribe/escribe';
import { Camera } from '@ionic-native/camera';
import { FirebaseService } from '../service/firebase.service';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-chequea',
  templateUrl: 'chequea.html'
})
export class ChequeaPage {

  currMoneda = 0;
  money = [
    {
      id:0,
      image:'../../assets/imgs/currency/2.png'
    },
    {
      id:1,
      image:'../../assets/imgs/currency/5.png'
    },
    {
      id:2,
      image:'../../assets/imgs/currency/20.png'
    },
    {
      id:3,
      image:'../../assets/imgs/currency/100.png'
    }
  ];

  constructor(public navCtrl: NavController, 
  	public camera: Camera,
  	public toastCtrl: ToastController,
  	public firebaseService: FirebaseService,
    public actionSheetCtrl: ActionSheetController) {

  }

  goToOtherPage() {
    this.navCtrl.push(EscribePage,{
      item:this.currMoneda
    });
  }

  selectCurrency(id){
    this.currMoneda = id;
    if(id > 1){
      this.presentActionSheet();
    } else {
      this.takePicture();
    }
    
  }

  presentActionSheet() {
      const actionSheet = this.actionSheetCtrl.create({
        title: '¿Qué desea hacer?',
        buttons: [
          {
            text: 'Toma una foto',
            handler: () => {
              this.takePicture();
            }
          },
          {
            text: 'Escribe tu numero de serie',
            handler: () => {
              this.goToOtherPage();
            }
          }
        ]
      });
      actionSheet.present();
    }

  goHome() {
      this.navCtrl.parent.select(0);
   }

   takePicture(){
   		const context = this;
   		

       this.camera.getPicture({
           destinationType: context.camera.DestinationType.DATA_URL,
           targetWidth: 1000,
           targetHeight: 1000
       }).then((imageData) => {
         // imageData is a base64 encoded string
           context.uploadImageToFirebase("data:image/jpeg;base64," + imageData);
       }, (err) => {
           console.log(err);
       });
     }


   uploadImageToFirebase(image){
       const parseImage = normalizeURL(image);
       const context = this;
       //toast.present();
       //uploads img to firebase storage
       this.firebaseService.uploadImage(parseImage).then(photoURL => {
       		context.firebaseService.getUploadedImage();
        });
     }


}
