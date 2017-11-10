import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { PreviewPage } from '../pages/preview/preview';
import { AcademicPage } from '../pages/academic/academic';
import { ApplyResPage} from '../pages/apply-res/apply-res';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    PreviewPage,
    AcademicPage,
    ApplyResPage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    PreviewPage,
    AcademicPage,
    ApplyResPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
