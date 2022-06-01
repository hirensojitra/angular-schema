import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox/checkbox';

import { FormBase } from './form-base';

@Component({
  selector: 'app-field',
  templateUrl: './dynamic-form-field.component.html',
})
export class DynamicFormFieldsComponent {
  @Input() field!: FormBase<string>;
  @Input() form!: FormGroup;
  get isValid() {
    return this.form.controls[this.field.key].valid;
  }
  get touched() {
    return this.form.controls[this.field.key].touched;
  }

  checkBoxvalue(v: MatCheckboxChange) {
    var t: any = v.checked ? true : undefined;
    v.checked = t;
  }
}
