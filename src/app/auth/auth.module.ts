import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from '@auth/auth-routing.module';
import { ConfirmRegistrationGuard } from '@auth/guards/confirm-registration.guard';
import { ConfirmRegistrationService } from '@auth/services/confirm-registration.service';
import { UserRegisterService } from '@auth/services/user-register.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule
  ],
  providers: [
    ConfirmRegistrationService,
    UserRegisterService,
    ConfirmRegistrationGuard
  ]
})
export class AuthModule { }
