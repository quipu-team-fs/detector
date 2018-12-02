import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AlertController } from 'ionic-angular';

@Injectable()
export class FirebaseService {

  constructor(private alertCtrl: AlertController){}

  encodeImageUri(imageUri, callback) {
    var c = document.createElement('canvas');
    var ctx = c.getContext("2d");
    var img = new Image();
    img.onload = function () {
      
      var aux:any = this;
      c.width = aux.width;
      c.height = aux.height;
      ctx.drawImage(img, 0, 0);
      var dataURL = c.toDataURL("image/jpeg");
      callback(dataURL);
    };
    img.src = imageUri;
  };

  getUploadedImage(){
    const context = this;
    let storageRef = firebase.storage().ref();
    let imageRef = storageRef.child('image').child('imageName');
    imageRef.getDownloadURL().then(url =>{
      let alert = context.alertCtrl.create({
          title: 'Si se ' + url,
          subTitle: '10% of battery remaining',
          buttons: ['Dismiss']
        });
        alert.present();
    }, err => {
      let alertError = context.alertCtrl.create({
          title: 'Si se ' + JSON.stringify( err),
          subTitle: '10% of battery remaining',
          buttons: ['Dismiss']
        });
        alertError.present();
    });
  }

  uploadImage(imageURI){
    const context = this;
    
    return new Promise<any>((resolve, reject) => {
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child('image').child('imageName');

      imageRef.putString(imageURI, 'data_url')
      .then(snapshot => {

        resolve(snapshot.downloadURL);

      }, err => {
        

        reject(err);

      })
    })
  }



}