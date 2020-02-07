import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavigationPage } from './navigation/navigation.page';
import { ServiceService  } from './api/service.service'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  isUserLogin=false;
  name ="Rakesh Kumar";
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private api: ServiceService,
    private alertCtrl: AlertController,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
     
    this.isUserLogin = this.api.checkUserLogin();
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();
    });
  }


   async presentAlert() {
      /*const alert = await this.alertCtrl.create({
      message: 'Low battery',
      subHeader: '10% of battery remaining',
      buttons: ['Dismiss']
     });
     await alert.present(); */

      let alert = await this.alertCtrl.create({
      message: 'Are you sure logout ?',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          handler: () => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.logoutClicked();
          }
        }
      ]
    });
    alert.present();
  }

  logoutClicked(){
    this.api.userLogout();

  }
}
