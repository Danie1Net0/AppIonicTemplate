import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { LoadingController } from '@ionic/angular';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { EmitValueService } from '@core/services/emit-value.service';
import { UserRegisterService } from '@auth/services/user-register.service';
import { UserRegister } from '@auth/models/user-register';
import { ConfirmRegistration } from '@auth/models/confirm-registration';
import { FORM_FIELDS } from '@auth/pages/register/config/form-fields-register';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public formGroup: FormGroup;
  public userRegister: UserRegister;
  public fields: FormlyFieldConfig[];

  constructor(
    private emitValueService: EmitValueService,
    private loadingController: LoadingController,
    private userRegisterService: UserRegisterService
  ) { }

  public ngOnInit(): void {
    this.formGroup = new FormGroup({});
    this.userRegister = new UserRegister();
    this.fields = FORM_FIELDS;
  }

  public async save() {
    const loading = await this.loadingController.create({
      message: 'Aguarde...'
    });
    await loading.present();

    this.userRegisterService.register(this.userRegister)
      .subscribe(async (user: any) => {
        const confirmRegistration = new ConfirmRegistration(this.userRegister.email, this.userRegister.phone);

        await loading.dismiss();
        await this.emitValueService.emitValue('confirmRegistration', confirmRegistration, '/auth/confirm-registration');
      });
  }

}
