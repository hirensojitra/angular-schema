import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DropdownFields } from './form-dropdown';
import { FormBase } from './form-base';
import { TextboxFields } from './form-textbox';
import { RadioFields } from './form-radio';
import { CheckboxFields } from './form-checkox';

@Injectable()
export class FormService {
  // TODO: get from a remote source of field metadata
  getFields() {
    const fields: FormBase<string>[] = [
      new CheckboxFields({
        key: 'condition',
        label: 'Accept Privacy Policy',
        value: '',
        required: true,
        order: 4,
      }),
      new DropdownFields({
        key: 'brave',
        label: 'Bravery Rating',
        required: true,
        options: [
          { value: 'solid', text: 'Solid' },
          { value: 'great', text: 'Great' },
          { value: 'good', text: 'Good' },
          { value: 'unproven', text: 'Unproven' },
        ],
        value: 'great',
        order: 2,
      }),
      new RadioFields({
        key: 'gender',
        label: 'Gender',
        required: true,
        options: [
          { value: 'male', text: 'Male' },
          { value: 'female', text: 'Female' },
        ],
        value: 'male',
        order: 3,
      }),
      new TextboxFields({
        key: 'firstName',
        label: 'First name',
        value: 'Hiren Sojitra',
        required: true,
        order: 0,
      }),
      new TextboxFields({
        key: 'emailAddress',
        label: 'Email',
        type: 'text',
        order: 1,
      }),
    ];
    return of(fields.sort((a, b) => a.order - b.order));
  }
}
