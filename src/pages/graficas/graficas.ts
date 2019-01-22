import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-graficas',
  templateUrl: 'graficas.html',
})
export class GraficasPage {
  data: Object;
  dataSource: Object;
  constructor(public navCtrl: NavController, public navParams: NavParams ) {

  }
      

  ionViewDidLoad() {
    console.log('ionViewDidLoad GraficasPage');
  }

}
