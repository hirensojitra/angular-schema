import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox/checkbox';

import { FormBase } from '../form-base';

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
  depend(v: any, f: any) {
    var data = [
      { value: 'AHM', text: 'Ahmedabad' },
      { value: 'AND', text: 'Anand' },
      { value: 'AMR', text: 'Amreli' },
      { value: 'BHV', text: 'Bhavnagar' }];
    return data
  }
}
