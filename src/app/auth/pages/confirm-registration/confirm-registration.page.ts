import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { LoadingController, ToastController } from '@ionic/angular';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { EmitValueService } from '@core/services/emit-value.service';
import { ConfirmRegistration } from '@auth/models/confirm-registration';
import { AuthenticationService } from '@core/services/authentication.service';
import { ConfirmRegistrationService } from '@auth/services/confirm-registration.service';
import { FORM_FIELDS } from '@auth/pages/confirm-registration/config/form-fields-confirm-registration';

@Component({
  selector: 'app-confirm-registration',
  templateUrl: './confirm-registration.page.html',
  styleUrls: ['./confirm-registration.page.scss'],
})
export class ConfirmRegistrationPage implements OnInit {

  public formGroup: FormGroup;
  public confirmRegistration: ConfirmRegistration;
  public fields: FormlyFieldConfig[];

  private loading: HTMLIonLoadingElement;
  private toast: HTMLIonToastElement;

  constructor(
    private authenticationService: AuthenticationService,
    private confirmRegistrationService: ConfirmRegistrationService,
    private emitValueService: EmitValueService,
    private loadingController: LoadingController,
    private router: Router,
    private toastController: ToastController
  ) { }

  public async ngOnInit() {
    this.formGroup = new FormGroup({});
    this.confirmRegistration = this.emitValueService.getValue('confirmRegistration');
    this.fields = FORM_FIELDS;

    this.loading = await this.loadingController.create({
      message: 'Aguarde...'
    });

    this.toast = await this.toastController.create({
      position: 'bottom',
      duration: 2000,
      buttons: [{
        icon: 'close',
      }]
    });
  }

  public async confirm() {
    await this.loading.present();

    this.confirmRegistrationService.confirmRegistration(this.confirmRegistration)
      .subscribe(async (confirmation: any) => {
        await this.loading.dismiss();
        await this.authenticationService.storageUser(confirmation.data.user);
        await this.authenticationService.storageToken(confirmation.data.token);

        this.authenticationService.isAuthenticated.next(true);

        await this.router.navigateByUrl('/dashboard', {
          replaceUrl: true
        });
      }, async (error: any) => {
        this.toast.color = 'danger';
        this.toast.message = error?.error?.meta?.message;

        await this.loading.dismiss();
        await this.toast.present();
      });

  }

  public async resendCode() {
    await this.loading.present();

    this.confirmRegistrationService.resendCode(this.confirmRegistration)
      .subscribe(async (success: any) => {
        this.toast.message = success?.meta?.message;
        this.toast.color = 'success';

        await this.loading.dismiss();
        await this.toast.present();
      });
  }

  public isCodeInvalid(): boolean {
    return this.confirmRegistration.code.filter(item => item === undefined || item === null).length > 0;
  }

}
