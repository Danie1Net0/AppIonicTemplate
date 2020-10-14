import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable()
export class FormValidationsService {

  public static emailValidator(formControl: FormControl): ValidationErrors {
    const isValid = !formControl.value || /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formControl.value);
    return isValid ? null : { email: { message: 'E-mail inválido' } };
  }

  public static phoneValidator(formControl: FormControl): ValidationErrors {
    const isValid = !formControl.value || formControl.value.length >= 10 && formControl.value.length <= 11;
    return isValid ? null : { phone: { message: 'Número de telefone inválido' } };
  }

  public static cpfValidator(formControl: FormControl): ValidationErrors {
    const isValid = !formControl.value || /^[0-9]{11}$/.test(formControl.value);
    return isValid ? null : { cpf: { message: 'CPF inválido' } };
  }

  public static cnpjValidator(formControl: FormControl): ValidationErrors {
    const isValid = !formControl.value || /^[0-9]{8}[0]{3}[1]{1}[0-9]{2}$/.test(formControl.value);
    return isValid ? null : { cnpj: { message: 'CNPJ inválido' } };
  }

  public static cepValidator(formControl: FormControl): ValidationErrors {
    const isValid = !formControl.value || /^[0-9]{8}$/.test(formControl.value);
    return isValid ? null : { cep: { message: 'CEP inválido' } };
  }

  public static fieldMatchValidator(control: AbstractControl): ValidationErrors {
    const { password, password_confirmation } = control.value;
    const isValid = (!password_confirmation || !password) || (password_confirmation === password);

    return isValid  ? null : { fieldMatch: { message: 'As senhas não correspondem' } };
  }

  public static getErrorMessage(error: any, field: FormlyFieldConfig): any {
    const errorKey = Object.keys(field.formControl.errors).shift();

    const messages = {
      required: `Este campo é obrigatório`,
      minlength: `Este campo deve ter no mínimo ${ field.templateOptions.minLength } caracteres`,
      maxlength: `Este campo deve ter no máximo ${ field.templateOptions.maxLength } caracteres`,
      min: `Este valor deve ser maior que ${ field.templateOptions.max }`,
      max: `Este valor deve ser menor que ${ field.templateOptions.max }`,
    };

    return messages[errorKey];
  }

}
