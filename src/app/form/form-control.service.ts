import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormBase } from './form-base';
import { ValidationService } from './validate.service';
import { TestBed } from '@angular/core/testing/testing';

@Injectable()
export class FieldsControlService {
  constructor(public val: ValidationService) { }
  errorMsg(l: any, error: any) {
    let errorList: any[] = [];
    Object.keys(error).forEach((e: any) => {
      switch (e) {
        case 'required':
          errorList.push(l + ' is required')
          break;
        case 'checkNumber':
          errorList.push('Enter Valid Number')
          break;
        case 'checkEmail':
          errorList.push('Enter Valid Email ID')
          break;
        case 'minCharacter':
          errorList.push('Enter minimum ' + error[e] + ' characters')
          break;
        case 'maxCharacter':
          errorList.push('Maximum ' + error[e] + ' characters are allowed')
          break;
        case 'minLowerCharacter':
          errorList.push('Enter minimum ' + error[e] + ' lower characters')
          break;
        case 'maxLowerCharacter':
          errorList.push('Maximum ' + error[e] + ' lower characters are allowed')
          break;
        case 'minUpperCharacter':
          errorList.push('Enter minimum ' + error[e] + ' upper characters')
          break;
        case 'maxUpperCharacter':
          errorList.push('Maximum ' + error[e] + ' upper characters are allowed')
          break;
        case 'minSpecialCharacter':
          errorList.push('Enter minimum ' + error[e] + ' special characters')
          break;
        case 'maxSpecialCharacter':
          errorList.push('Maximum ' + error[e] + ' special characters are allowed')
          break;
        case 'minDigitCharacter':
          errorList.push('Enter minimum ' + error[e] + ' digit characters')
          break;
        case 'maxDigitCharacter':
          errorList.push('Maximum ' + error[e] + ' digit characters are allowed')
          break;
        case 'confirmedValidator':
          errorList.push(l + ' is not match with ' + error.confirmedValidator + '.')
          break;
        default:
          break;
      }
    });
    return (errorList) ? errorList[0] : "";
  }
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
                    let label = '' // Will return label of matching field
                    if (v.match) {
                      form.controls[v.match].valueChanges.subscribe((value: any) => {
                        form.controls[element.key].setValue(form.controls[element.key].value)
                      })
                      fields.forEach((field: any) => {
                        if (field.key == v.match) {
                          label = field.label
                        }
                      })
                      form.controls[element.key].addValidators([this.val.ConfirmedValidator(form.controls[v.match], label)])
                    }
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
