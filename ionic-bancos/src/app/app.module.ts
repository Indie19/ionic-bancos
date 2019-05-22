import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListBanksPage } from '../pages/list-banks/list-banks';
import { AddBanksPage } from '../pages/add-banks/add-banks';
import { ListBanksProvider } from '../providers/list-banks/list-banks';
import { AddBankProvider } from '../providers/add-bank/add-bank';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListBanksPage,
    AddBanksPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListBanksPage,
    AddBanksPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListBanksProvider,
    AddBankProvider
  ]
})
export class AppModule {}
