import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { GraficasPage } from '../graficas/graficas';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1;
  tab2;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = PrincipalPage;
    this.tab2 = GraficasPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
