import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PreviewPage } from '../preview/preview';
import { AcademicPage } from '../academic/academic';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public surname:string;
  public name: string;
  public studentNumber: number;
  public idNumber: number;
  public applicants ={};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
  public onClick_Submit(){
    this.navCtrl.push(AcademicPage);


 }

}
