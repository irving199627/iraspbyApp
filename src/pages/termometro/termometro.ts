import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';

/**
 * Generated class for the TermometroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-termometro',
  templateUrl: 'termometro.html',
})
export class TermometroPage {
  data: Object;
  bandera: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public _fbs: FirebaseProvider, public loadingCtrl: LoadingController) {
    this._fbs.getDatos();
    const loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: "Cargando Datos...",
    });
    loader.present();
    setTimeout(() => {
      this.temperatura();
      this.bandera = true;
      loader.dismiss();
      setInterval(() => {
      this.temperatura();
      }, 1000);
      }, 2000);
  }
  temperatura () {
    this.data = {
      chart: {
        caption: 'Temperatura ambiente (actual)',
        lowerLimit: 0,
        upperLimit: 10,
        numberSuffix: '°C',
        thmFillColor: '#29C3BE',
        plotToolText: 'Temperatura: <b>$datavalue</b> ',
        theme: 'candy'
        },
        value: this._fbs.tempValue,
      };
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermometroPage');
  }

}
