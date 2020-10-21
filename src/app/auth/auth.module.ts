import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from '@auth/auth-routing.module';
import { ConfirmRegistrationGuard } from '@auth/guards/confirm-registration.guard';
import { ResetPasswordGuard } from '@auth/guards/reset-password.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule
  ],
  providers: [
    ConfirmRegistrationGuard,
    ResetPasswordGuard
  ]
})
export class AuthModule { }
