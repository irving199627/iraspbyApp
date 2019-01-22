import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TermometroPage } from '../termometro/termometro';



@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  luces() {
    this.navCtrl.push(HomePage);
  }
  termometro(){
    this.navCtrl.push(TermometroPage);
  }

}
