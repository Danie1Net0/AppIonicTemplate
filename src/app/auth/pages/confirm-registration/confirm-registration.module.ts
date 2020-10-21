import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyIonicModule } from '@ngx-formly/ionic';

import { ConfirmRegistrationPageRoutingModule } from '@auth/pages/confirm-registration/confirm-registration-routing.module';
import { ConfirmRegistrationPage } from '@auth/pages/confirm-registration/confirm-registration.page';
import { ConfirmRegistrationService } from '@auth/services/confirm-registration.service';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormlyModule.forChild(),
    FormlyIonicModule,
    ConfirmRegistrationPageRoutingModule
  ],
  declarations: [ConfirmRegistrationPage],
  providers: [ConfirmRegistrationService]
})
export class ConfirmRegistrationPageModule {}
