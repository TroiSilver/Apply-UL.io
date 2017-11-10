import { Component, ViewChild} from '@angular/core';
import { Nav,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApplyResPage} from '../pages/apply-res/apply-res';
import { RegisterPage} from '../pages/register/register';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
 pages: Array<{title:string,component: any}>

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.pages = [{ title: 'home', component: HomePage },
                  { title: 'Personal', component: RegisterPage }, 
                 { title: 'res', component: ApplyResPage }];
    platform.ready().then(() => { 
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
    });
  }
  openPage(page){
    this.nav.push(page.component);
  }
  
}

