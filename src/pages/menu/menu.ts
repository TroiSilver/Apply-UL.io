import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage} from '../register/register';
import { ApplyResPage } from '../apply-res/apply-res';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  personal(){
    this.navCtrl.push(RegisterPage)
  }
  Academic(){

  }
  Residence(){
    this.navCtrl.push(ApplyResPage)
  }
  Preview(){

  }

}
