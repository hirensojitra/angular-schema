import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormBase } from './form-base';
import { ValidationService } from './validate.service';

@Injectable()
export class FieldsControlService {
  constructor(public val: ValidationService) { }
  toFormGroup(fields: FormBase<string>[]) {
    const group: any = {};
    fields.forEach(field => {
      group[field.key] = field.required ? new FormControl(field.value || '', Validators.required) : new FormControl(field.value || '');
    });
    var form = new FormGroup(group);
    // Search each fields which have dependency value
    fields.filter(element => {
      if (element.validators.length) {
        element.validators.filter((v: any) => {
          switch (typeof (v)) {
            case 'string':
              switch (v) {
                case 'CheckNumber':
                  form.controls[element.key].addValidators([this.val.CheckNumber()])
                  break;
                case 'CheckEmail':
                  form.controls[element.key].addValidators([this.val.CheckEmail()])
                  break;
                default:
                  break;
              }
              break;
            case 'object':
              Object.keys(v).forEach(key => {
                switch (key) {
                  case 'password':
                    console.log((v.password[0], v.password[1]))

                  // form.controls[element.key].addValidators([this.val.ConfirmedValidator(v.password[0], v.password[1])])
                    break;
                  default:
                    break;
                }
              });
              break;
            default:
              break;
          }
        })
      }
      if (element.depend !== undefined) {
        form.controls[element.depend].valueChanges.subscribe((value: any) => {
          element.options = element.dependValue.filter((e: any) => {
            return e.filter == value
          })
          form.controls[element.key].setValue(undefined)
          form.controls[element.key].reset
        });
      }
    })
    return form
  }
}
