import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyIonicModule } from '@ngx-formly/ionic';

import { LoginPageRoutingModule } from '@auth/pages/login/login-routing.module';
import { LoginPage } from '@auth/pages/login/login.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyIonicModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
