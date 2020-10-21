import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { IonSlides, LoadingController, ToastController } from '@ionic/angular';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

import { RecoverPasswordService } from '@auth/services/recover-password.service';

@Component({
  selector: 'app-slides-reset-password',
  templateUrl: './slides-reset-password.component.html',
  styleUrls: ['./slides-reset-password.component.scss'],
})
export class SlidesResetPasswordComponent extends FieldType implements OnInit, AfterViewInit {

  @ViewChild(IonSlides) slides: IonSlides;

  constructor(
    private loadingController: LoadingController,
    private resetPasswordService: RecoverPasswordService,
    private toastController: ToastController
  ) {
    super();
  }

  public async ngOnInit() { }

  public async ngAfterViewInit() {
    await this.slides.lockSwipes(true);
  }

  public async next() {
    await this.slides.lockSwipes(false);
    await this.slides.slideNext();
    await this.slides.lockSwipes(true);
  }

  public async previous() {
    await this.slides.lockSwipes(false);
    await this.slides.slidePrev();
    await this.slides.lockSwipes(true);
  }

  public isValid(field: FormlyFieldConfig): any {
    if (field.key) {
      return field.formControl.valid;
    }

    return field.fieldGroup.every(f => this.isValid(f));
  }

  public isCodeInvalid(): boolean {
    return this.model.code?.filter(item => item === undefined || item === null).length > 0;
  }

  public async checkCode() {
    const loading = await this.loadingController.create({
      message: 'Carregando...'
    });
    await loading.present();

    this.resetPasswordService.checkCode(this.model.code)
      .subscribe(async (success: any) => {
        await loading.dismiss();
        await this.next();
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

  public async sendResetPassword() {
    const loading = await this.loadingController.create({
      message: 'Carregando...'
    });
    await loading.present();

    this.resetPasswordService.resetPassword(this.model)
      .subscribe(async (success: any) => {
        await loading.dismiss();
        await this.next();
      });
  }

}
