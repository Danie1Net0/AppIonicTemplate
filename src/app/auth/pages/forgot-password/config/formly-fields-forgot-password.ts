import { FormlyFieldConfig } from '@ngx-formly/core';

export const FORM_FIELDS: FormlyFieldConfig[] = [{
  type: 'slides-forgot-password',
  fieldGroup: [
    {
      templateOptions: {
        label: 'Insira o CPF cadastrado'
      },
      fieldGroup: [{
        key: 'cpf',
        type: 'input',
        templateOptions: {
          label: 'CPF',
          required: true
        },
        validators: {
          validation: ['cpf']
        }
      }]
    },
    {
      templateOptions: {
        label: 'Agora insira o número de celular ou e-mail cadastrado'
      },
      fieldGroup: [{
        key: 'login',
        type: 'input',
        templateOptions: {
          label: 'Login',
          required: true
        }
      }]
    }
  ]
}];
