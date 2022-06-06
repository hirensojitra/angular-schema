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
                console.log(key)
                switch (key) {
                  case 'match':
                    if (v.match) {
                      form.controls[v.match].valueChanges.subscribe((value: any) => {
                        form.controls[element.key].setValue(form.controls[element.key].value)
                      })
                    }
                    (v.match) ? form.controls[element.key].addValidators([this.val.ConfirmedValidator(form.controls[v.match])]) : null
                    break;
                  case 'minCharacter':
                    (v.minCharacter) ? form.controls[element.key].addValidators([this.val.minCharacter(v[key])]) : null
                    break;
                  case 'maxCharacter':
                    (v.maxCharacter) ? form.controls[element.key].addValidators([this.val.maxCharacter(v[key])]) : null
                    break;
                  case 'minLowerCharacter':
                    (v.minLowerCharacter) ? form.controls[element.key].addValidators([this.val.minLowerCharacter(v[key])]) : null
                    break;
                  case 'maxLowerCharacter':
                    (v.maxLowerCharacter) ? form.controls[element.key].addValidators([this.val.maxLowerCharacter(v[key])]) : null
                    break;
                  case 'minUpperCharacter':
                    (v.minUpperCharacter) ? form.controls[element.key].addValidators([this.val.minUpperCharacter(v[key])]) : null
                    break;
                  case 'maxUpperCharacter':
                    (v.maxUpperCharacter) ? form.controls[element.key].addValidators([this.val.maxUpperCharacter(v[key])]) : null
                    break;
                  case 'minSpecialCharacter':
                    (v.minSpecialCharacter) ? form.controls[element.key].addValidators([this.val.minSpecialCharacter(v[key])]) : null
                    break;
                  case 'maxSpecialCharacter':
                    (v.maxSpecialCharacter) ? form.controls[element.key].addValidators([this.val.maxSpecialCharacter(v[key])]) : null
                    break;
                  case 'minDigitCharacter':
                    (v.minDigitCharacter) ? form.controls[element.key].addValidators([this.val.minDigitCharacter(v[key])]) : null
                    break;
                  case 'maxDigitCharacter':
                    (v.maxDigitCharacter) ? form.controls[element.key].addValidators([this.val.maxDigitCharacter(v[key])]) : null
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
