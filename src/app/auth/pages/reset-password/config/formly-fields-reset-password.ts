import { FormlyFieldConfig } from '@ngx-formly/core';

export const FORM_FIELDS: FormlyFieldConfig[] = [{
  type: 'slides-reset-password',
  validators: {
    validation: [{
      name: 'fieldMatch',
      options: {
        errorPath: 'password_confirmation'
      }
    }],
  },
  fieldGroup: [
    {
      templateOptions: {
        label: 'Insira o código que enviamos por e-mail ou SMS'
      },
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-input',
          key: 'code[0]',
          type: 'input',
          templateOptions: {
            type: 'number',
            min: 0,
            keyup: (field: FormlyFieldConfig) => field.parent.fieldGroup[1].focus = true
          }
        },
        {
          className: 'flex-input',
          key: 'code[1]',
          type: 'input',
          templateOptions: {
            type: 'number',
            min: 0,
            keyup: (field: FormlyFieldConfig) => field.parent.fieldGroup[2].focus = true
          },
        },
        {
          className: 'flex-input',
          key: 'code[2]',
          type: 'input',
          templateOptions: {
            type: 'number',
            min: 0,
            keyup: (field: FormlyFieldConfig) => field.parent.fieldGroup[3].focus = true
          }
        },
        {
          className: 'flex-input',
          key: 'code[3]',
          type: 'input',
          templateOptions: {
            type: 'number',
            min: 0
          }
        }
      ]
    },
    {
      templateOptions: {
        label: 'Defina sua nova senha'
      },
      fieldGroup: [{
        key: 'password',
        type: 'input',
        templateOptions: {
          label: 'Senha:',
          type: 'password',
          required: true,
          minLength: 8
        }
      }]
    },
    {
      templateOptions: {
        label: 'Repita a sua nova senha'
      },
      fieldGroup: [{
        key: 'password_confirmation',
        type: 'input',
        templateOptions: {
          label: 'Confirmação:',
          type: 'password',
          required: true,
          minLength: 8
        }
      }]
    },
    {
      template: '<h3>Senha recuperada com sucesso!</h3><p>Clique no botão abaixo para fazer o login.</p>'
    }
  ]
}];
