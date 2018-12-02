import { Component } from '@angular/core';
import { NavController, ToastController, normalizeURL } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Camera } from '@ionic-native/camera';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'page-chequea',
  templateUrl: 'chequea.html'
})
export class ChequeaPage {

	public base64Image: string;

  constructor(public navCtrl: NavController, 
  	public camera: Camera,
  	public toastCtrl: ToastController,
  	public firebaseService: FirebaseService) {

  }

  goHome() {
      this.navCtrl.parent.select(0);
   }

   takePicture(){
   		const context = this;
   		

       this.camera.getPicture({
           destinationType: context.camera.DestinationType.FILE_URI,
           targetWidth: 1000,
           targetHeight: 1000
       }).then((imageData) => {
         // imageData is a base64 encoded string
           context.base64Image = "data:image/jpeg;base64," + imageData;
           let toast = this.toastCtrl.create({
             message: "Data es " + imageData,
             duration: 3000
           });
           toast.present();
           context.uploadImageToFirebase(context.base64Image);
       }, (err) => {
           console.log(err);
       });
     }


   uploadImageToFirebase(image){
       image = normalizeURL(image);
       let toast = this.toastCtrl.create({
         message: 'Imagen subida exitosamente ' + image,
         duration: 3000
       });
       toast.present();
       //uploads img to firebase storage
       this.firebaseService.uploadImage(image).then(photoURL => {
         //toast.present();
        });
     }


}
