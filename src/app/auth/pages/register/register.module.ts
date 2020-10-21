import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyIonicModule } from '@ngx-formly/ionic';

import { RegisterPageRoutingModule } from '@auth/pages/register/register-routing.module';
import { RegisterPage } from '@auth/pages/register/register.page';
import { SlidesRegisterComponent } from '@auth/pages/register/components/slides-register/slides-register.component';
import { DocumentPhotosComponent } from '@auth/pages/register/components/document-photos/document-photos.component';
import { SelfieComponent } from '@auth/pages/register/components/selfie/selfie.component';
import { UserRegisterService } from '@auth/services/user-register.service';
import { FORMLY_CONFIG } from '@auth/pages/register/config/formly-config-register';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RegisterPageRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forChild(FORMLY_CONFIG),
    FormlyIonicModule
  ],
  declarations: [
    RegisterPage,
    SlidesRegisterComponent,
    DocumentPhotosComponent,
    SelfieComponent
  ],
  providers: [UserRegisterService]
})
export class RegisterPageModule {}
