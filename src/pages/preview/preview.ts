import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preview',
  templateUrl: 'preview.html',
})
export class PreviewPage {  

  public name: string;
  public surname: string = "dddd";
  public studentNumber: number;
  public id: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.name = this.navParams.get('name');
    this.surname = this.navParams.get('surname');
    this.studentNumber = this.navParams.get('studentNumber');
    this.id = this.navParams.get('id');

  }


}
