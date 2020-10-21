import { FormlyFieldConfig } from '@ngx-formly/core';

export const FORM_FIELDS: FormlyFieldConfig[] = [{
  type: 'slides-register',
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
        label: 'Insira seu endereço de e-mail'
      },
      fieldGroup: [{
        key: 'email',
        type: 'input',
        templateOptions: {
          label: 'E-mail',
          required: true,
          keyup: (field, event) => {
            this.next(field);
          }
        },
        validators: {
          validation: ['email']
        }
      }]
    },
    {
      templateOptions: {
        label: 'Insira seu número de celular'
      },
      fieldGroup: [{
        key: 'phone',
        type: 'input',
        templateOptions: {
          label: 'Celular:',
          required: true,
        },
        validators: {
          validation: ['phone']
        }
      }]
    },
    {
      templateOptions: {
        label: 'Qual é o seu nome?'
      },
      fieldGroup: [{
        key: 'name',
        type: 'input',
        templateOptions: {
          label: 'Nome',
          required: true,
          maxLength: 100
        }
      }]
    },
    {
      templateOptions: {
        label: 'Informe-nos os seu CPF'
      },
      fieldGroup: [{
        key: 'cpf',
        type: 'input',
        templateOptions: {
          label: 'CPF:',
          required: true,
        },
        validators: {
          validation: ['cpf']
        }
      }]
    },
    {
      templateOptions: {
        label: 'Defina sua senha'
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
        label: 'Repita a senha do passo anterior'
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
      templateOptions: {
        label: 'Precisamos da images do seu documento pessoal com foto'
      },
      fieldGroup: [{
        key: 'document-photos',
        type: 'document-photos',
      }]
    },
    {
      templateOptions: {
        label: 'E agora de sua selfie'
      },
      fieldGroup: [{
        key: 'selfie',
        type: 'selfie',
      }]
    },
  ]
}];
