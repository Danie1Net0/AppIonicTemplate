import { FormlyFieldConfig } from '@ngx-formly/core';

export const FORM_FIELDS: FormlyFieldConfig[] = [
  {
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
  }
];
