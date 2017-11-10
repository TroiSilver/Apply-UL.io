import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PreviewPage} from '../preview/preview';

/**
 * Generated class for the ApplyResPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apply-res',
  templateUrl: 'apply-res.html',
})
export class ApplyResPage {
  surname:string =''
  studentNumber:number;
  level:any;
  building:string ='';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplyResPage');
  }
  public onClick_Submit() {
   // this.navCtrl.push(PreviewPage, { 'name': this.name, 'surname': this.surname, 'studentNumber': this.studentNumber, 'id': this.idNumber });
    this.navCtrl.push(PreviewPage, { 'studentNumber': this.studentNumber,
                                   'surname': this.surname, 
                                   'level': this.level,
                                    'building': this.building });


  }

}
