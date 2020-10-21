import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { LoadingController, ToastController } from '@ionic/angular';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { EmitValueService } from '@core/services/emit-value.service';
import { RecoverPasswordService } from '@auth/services/recover-password.service';
import { ForgotPassword } from '@auth/models/forgot-password';
import { ResetPassword } from '@auth/models/reset-password';
import { FORM_FIELDS } from '@auth/pages/forgot-password/config/formly-fields-forgot-password';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  public formGroup: FormGroup;
  public forgotPassword: ForgotPassword;
  public fields: FormlyFieldConfig[];

  constructor(
    public router: Router,
    private emitValueService: EmitValueService,
    private loadingController: LoadingController,
    private recoverPasswordService: RecoverPasswordService,
    private toastController: ToastController
  ) { }

  public ngOnInit(): void {
    this.formGroup = new FormGroup({});
    this.forgotPassword = new ForgotPassword();
    this.fields = FORM_FIELDS;
  }

  public async sendForgotPassword() {
    const loading = await this.loadingController.create({
      message: 'Carregando...'
    });
    await loading.present();

    this.recoverPasswordService.forgotPassword(this.forgotPassword)
      .subscribe(async (success: any) => {
        await this.emitValueService.emitValue('resetPassword', new ResetPassword(this.forgotPassword.cpf), '/auth/reset-password');
        await loading.dismiss();
      }, async (error: any) => {
        const toast = await this.toastController.create({
          message: error.error?.meta?.message,
          color: 'danger',
          position: 'bottom',
          duration: 3000,
          buttons: [{
            icon: 'close'
          }]
        });

        await loading.dismiss();
        await toast.present();
      });
  }

}
