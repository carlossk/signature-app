import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { ToastController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  signature:string = '';
  isDrawing:boolean = false;
  @ViewChild(SignaturePad)signaturePad: SignaturePad;
  private signaturePadOptions: Object={
    'minWidth': 2,
    'canvasWidth': 400,
    'canvasHeight': 200,
    'backgroundColor': '#f6fbff',
    'penColor': '#000000'
  };
  constructor(public navCtrl: NavController,public toastCtrl: ToastController) {

  }
  ionViewDidEnter() {
    this.signaturePad.clear();

  }
  drawComplete() {
    this.isDrawing = false;
  }
  drawStart() {
    this.isDrawing = true;
  }
  savePad() {
    this.signature = this.signaturePad.toDataURL();
    console.log(this.signaturePad,this.signature);
    let toast = this.toastCtrl.create({
      message: 'New Signature saved.',
      duration: 3000
    });
    toast.present();
  }
  clearPad() {
    this.signaturePad.clear();
  }

}
