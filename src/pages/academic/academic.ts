import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApplyResPage} from '../apply-res/apply-res';

/**
 * Generated class for the AcademicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-academic',
  templateUrl: 'academic.html',
})
export class AcademicPage {
  subject1 = ''
  subject2 = ''
  subject3 = ''
  subject4 = ''
  subject5 = ''
  subject6 = ''
  subject7 = ''
  mark_Subject1 = 0;
  mark_Subject2 =0;
  mark_Subject3 = 0;
  mark_Subject4 = 0;
  mark_Subject5 = 0;
  mark_Subject6 = 0;
  mark_Subject7 = 0;
  mark_Subject8 = 0;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcademicPage');
  }
  nextToRes(){
    this.navCtrl.push(ApplyResPage);
  }


}
