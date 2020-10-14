import { FormValidationsService } from '@core/services/form-validations.service';

const VALIDATORS = [
  {
    name: 'email',
    validation: FormValidationsService.emailValidator
  },
  {
    name: 'phone',
    validation: FormValidationsService.phoneValidator
  },
  {
    name: 'cpf',
    validation: FormValidationsService.cpfValidator
  },
  {
    name: 'cnpj',
    validation: FormValidationsService.cnpjValidator
  },
  {
    name: 'cep',
    validation: FormValidationsService.cepValidator
  },
  {
    name: 'fieldMatch',
    validation: FormValidationsService.fieldMatchValidator
  }
];

const VALIDATION_MESSAGES = [
  {
    name: 'required',
    message: FormValidationsService.getErrorMessage
  },
  {
    name: 'minlength',
    message: FormValidationsService.getErrorMessage
  },
  {
    name: 'maxlength',
    message: FormValidationsService.getErrorMessage
  },
  {
    name: 'min',
    message: FormValidationsService.getErrorMessage
  },
  {
    name: 'max',
    message: FormValidationsService.getErrorMessage
  },
];

export const FORMLY_CONFIG = {
  validators: VALIDATORS,
  validationMessages: VALIDATION_MESSAGES,
  extras: {
    lazyRender: true
  }
};
