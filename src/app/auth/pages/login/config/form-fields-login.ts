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
      type: 'password'
    }
  }
];
