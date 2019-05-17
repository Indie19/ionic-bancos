import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home'
import { ListBanksPage } from '../pages/list-banks/list-banks';
import { AddBanksPage } from '../pages/add-banks/add-banks';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = AddBanksPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

