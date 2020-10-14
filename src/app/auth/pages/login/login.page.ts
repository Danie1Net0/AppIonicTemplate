import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AlertController, LoadingController } from '@ionic/angular';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { EmitValueService } from '@core/services/emit-value.service';
import { AuthenticationService } from '@core/services/authentication.service';
import { Credentials } from '@auth/models/credentials';
import { FORM_FIELDS } from '@auth/pages/login/config/form-fields-login';
import { ConfirmRegistration } from '@auth/models/confirm-registration';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private authenticationService: AuthenticationService,
    private emitValueService: EmitValueService,
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private router: Router,
  ) { }

  public formGroup: FormGroup;
  public credentials: Credentials;
  public fields: FormlyFieldConfig[];

  private static getEmailAndPhone(login: string): any {
    const email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(login) ? login : null;
    const phone = email ? null : login;

    return { email, phone };
  }

  public ngOnInit(): void {
    this.formGroup = new FormGroup({});
    this.credentials = new Credentials('teste@teste.com', 'asdfasdf');
    this.fields = FORM_FIELDS;
  }

  public async login() {
    const loading = await this.loadingController.create({
      message: 'Autenticando...'
    });
    await loading.present();

    this.authenticationService.login(this.credentials)
      .subscribe(async (success: any) => {
        await loading.dismiss();

        await this.router.navigateByUrl('/dashboard/tabs', {
          replaceUrl: true
        });
      }, async (error: any) => {
        await loading.dismiss();

        if (error.error?.data.unconfirmed) {
          const { email, phone } = LoginPage.getEmailAndPhone(this.credentials.login);
          const confirmRegistration = new ConfirmRegistration(email, phone);

          return await this.emitValueService.emitValue('confirmRegistration', confirmRegistration, '/auth/confirm-registration', {
            replaceUrl: true
          });
        }

        const alert = await this.alertController.create({
          header: 'Autenticação Falhou',
          message: error.error?.meta?.message,
          buttons: ['Ok']
        });
        await alert.present();
      });
  }

  public async register() {
    await this.router.navigateByUrl('/auth/register', {
      replaceUrl: true
    });
  }

}
