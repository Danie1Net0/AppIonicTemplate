import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController, LoadingController, MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AuthenticationService } from '@core/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public appPages = [];

  constructor(
    private authenticationService: AuthenticationService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private menuController: MenuController,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  public initializeApp(): void {
    this.platform.ready()
      .then(async () => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
        this.authenticationService.isAuthenticated
          .pipe()
          .subscribe(async isAuthenticated => await this.menuController.enable(isAuthenticated ?? false));
      });
  }

  public async logout() {
    const loading = await this.loadingController.create({
      message: 'Saindo...',
    });

    const alert = await this.alertController.create({
      header: 'Sair',
      message: 'Você quer mesmo sair?',
      buttons: [
        {
          text: 'Sair',
          handler: async () => {
            await this.menuController.enable(false);
            await loading.present();

            this.authenticationService.logout()
              .subscribe((success: any) => {
                this.router.navigateByUrl('/').then(async _ => await loading.dismiss());
              });
          }
        },
        {
          text: 'Cancelar',
        }
      ]
    });

    await alert.present();
  }

}
