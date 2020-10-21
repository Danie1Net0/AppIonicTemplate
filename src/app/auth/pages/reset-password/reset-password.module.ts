import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyIonicModule } from '@ngx-formly/ionic';

import { ResetPasswordPageRoutingModule } from '@auth/pages/reset-password/reset-password-routing.module';
import { ResetPasswordPage } from '@auth/pages/reset-password/reset-password.page';
import { RecoverPasswordService } from '@auth/services/recover-password.service';
import { SlidesResetPasswordComponent } from '@auth/pages/reset-password/components/slides-reset-password/slides-reset-password.component';
import { FORMLY_CONFIG } from '@auth/pages/reset-password/config/formly-config-reset-password';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ResetPasswordPageRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forChild(FORMLY_CONFIG),
    FormlyIonicModule
  ],
  declarations: [
    ResetPasswordPage,
    SlidesResetPasswordComponent
  ],
  providers: [RecoverPasswordService]
})
export class ResetPasswordPageModule {}
