import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormlyModule } from '@ngx-formly/core';

import { FORMLY_CONFIG } from '@core/config/formly-config-app';
import { AuthenticationService } from '@core/services/authentication.service';
import { EmitValueService } from '@core/services/emit-value.service';
import { FormValidationsService } from '@core/services/form-validations.service';
import { HandleErrorService } from '@core/services/handle-error.service';
import { AutoLoginGuard } from '@core/guards/auto-login.guard';
import { AuthGuard } from '@core/guards/auth.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormlyModule.forRoot(FORMLY_CONFIG),
  ],
  providers: [
    AuthenticationService,
    EmitValueService,
    FormValidationsService,
    HandleErrorService,
    AuthGuard,
    AutoLoginGuard
  ]
})
export class CoreModule { }
