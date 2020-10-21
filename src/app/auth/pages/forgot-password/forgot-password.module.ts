import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyIonicModule } from '@ngx-formly/ionic';

import { ForgotPasswordPageRoutingModule } from '@auth/pages/forgot-password/forgot-password-routing.module';
import { ForgotPasswordPage } from '@auth/pages/forgot-password/forgot-password.page';
import { SlidesForgotPasswordComponent } from '@auth/pages/forgot-password/components/slides-forgot-password/slides-forgot-password.component';
import { RecoverPasswordService } from '@auth/services/recover-password.service';
import { FORMLY_CONFIG } from '@auth/pages/forgot-password/config/formly-config-forgot-password';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ForgotPasswordPageRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forChild(FORMLY_CONFIG),
    FormlyIonicModule
  ],
  declarations: [
    ForgotPasswordPage,
    SlidesForgotPasswordComponent
  ],
  providers: [RecoverPasswordService]
})
export class ForgotPasswordPageModule {}
