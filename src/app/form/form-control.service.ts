import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormBase } from './form-base';

@Injectable()
export class FieldsControlService {
  constructor() { }

  toFormGroup(fields: FormBase<string>[]) {
    const group: any = {};
    fields.forEach(field => {
      group[field.key] = field.required ? new FormControl(field.value || '', Validators.required) : new FormControl(field.value || '');
    });
    var form = new FormGroup(group);
    // Search each fields which have dependency value
    fields.filter(element => {
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
