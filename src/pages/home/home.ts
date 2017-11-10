import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }

  public onClick_RegisterPage(){
    this.navCtrl.push(RegisterPage);
  }


}
 