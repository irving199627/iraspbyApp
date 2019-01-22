import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  luz1Ref;
  sensoresRef;
  luz1: boolean;
  luz2: boolean;
  luz3: boolean;
  luz4: boolean;
  luz5: boolean;
  luz6: boolean;
  luz7: boolean;
  luz8: boolean;
  movimiento: boolean;
  tierra: boolean;
  encendidoMovimiento;
  encendidoTierra;
  encendido;
  encendido2;
  encendido3;
  encendido4;
  encendido5;
  encendido6;
  encendido7;
  encendido8;
  id;

  constructor( public _fbp: FirebaseProvider, public loadingCtrl: LoadingController ) {

      const loader = this.loadingCtrl.create({
        spinner: 'bubbles',
        content: "Cargando Datos...",
      });
    loader.present();
                  this._fbp.obtenerLuces('luces').subscribe( data => {
                    this.luz1Ref = data;
                    if (this.luz1Ref) {
                      loader.dismiss();
                    }
                    this.luz1 = this.luz1Ref.luz_cocina;
                    this.luz2 = this.luz1Ref.luz_sala;
                    this.luz3 = this.luz1Ref.luz4;
                    this.luz4 = this.luz1Ref.luz5;
                    this.luz5 = this.luz1Ref.luz6;
                    this.luz6 = this.luz1Ref.luz7;
                    this.luz7 = this.luz1Ref.luz8;
                    this.luz8 = this.luz1Ref.luz9;
                    if (this.luz1) {
                      this.encendido = "ON";
                    }
                    else {
                      this.encendido = "OFF"
                    }
                    if (this.luz2) {
                      this.encendido2 = "ON";
                    }
                    else {
                      this.encendido2 = "OFF"
                    }
                    if (this.luz3) {
                      this.encendido3 = "ON";
                    }
                    else {
                      this.encendido3 = "OFF"
                    }
                    if (this.luz4) {
                      this.encendido4 = "ON";
                    }
                    else {
                      this.encendido4 = "OFF"
                    }
                    if (this.luz5) {
                      this.encendido5 = "ON";
                    }
                    else {
                      this.encendido5 = "OFF"
                    }
                    if (this.luz6) {
                      this.encendido6 = "ON";
                    }
                    else {
                      this.encendido6 = "OFF"
                    }
                    if (this.luz7) {
                      this.encendido7 = "ON";
                    }
                    else {
                      this.encendido7 = "OFF"
                    }
                    if (this.luz8) {
                      this.encendido8 = "ON";
                    }
                    else {
                      this.encendido8 = "OFF"
                    }

                  }); 
  }

}
