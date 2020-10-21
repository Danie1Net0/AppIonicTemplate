import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { EmitValueService } from '@core/services/emit-value.service';
import { ResetPassword } from '@auth/models/reset-password';
import { FORM_FIELDS } from '@auth/pages/reset-password/config/formly-fields-reset-password';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  public formGroup: FormGroup;
  public resetPassword: ResetPassword;
  public fields: FormlyFieldConfig[];

  constructor(private emitValueService: EmitValueService) { }

  public ngOnInit(): void {
    this.formGroup = new FormGroup({});
    this.resetPassword = this.emitValueService.getValue('resetPassword');
    this.fields = FORM_FIELDS;
  }

}
