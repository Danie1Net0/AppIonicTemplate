import { FormlyFieldConfig } from '@ngx-formly/core';

export const FORM_FIELDS: FormlyFieldConfig[] = [
  {
    key: 'login',
    type: 'input',
    templateOptions: {
      label: 'E-mail',
      placeholder: 'Insira seu e-mail',
      required: true,
    }
  },
  {
    key: 'password',
    type: 'input',
    templateOptions: {
      label: 'Senha',
      placeholder: 'Insira sua senha',
      required: true,
      minLength: 8,
      type: 'password',
      keyup: async (field: FormlyFieldConfig, event: any) => {
        if (event.key === 'Enter' && this.formGroup.valid) {
          await this.login();
        }
      }
    }
  }
];
