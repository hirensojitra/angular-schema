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
    var state = [
      { value: 'GJ', text: 'Gujarat' },
      { value: 'MH', text: 'Maharashtra' },
      { value: 'RJ', text: 'Rajasthan' },
      { value: 'GA', text: 'Goa' },
    ]
    var districts = [
      { value: 'AHM', text: 'Ahmedabad', filter: 'GJ' },
      { value: 'AND', text: 'Anand', filter: 'GJ' },
      { value: 'AMR', text: 'Amreli', filter: 'GJ' },
      { value: 'JPR', text: 'Jaipur', filter: 'RJ' },
      { value: 'BHV', text: 'Bhavnagar', filter: 'GJ' }]
    var taluka = [
      { value: 'AMR', text: 'Amreli', filter: 'AMR' }
    ]
    const fields: FormBase<string>[] = [
      new CheckboxFields({
        key: 'condition',
        label: 'Accept Privacy Policy',
        value: '',
        required: true,
        order: 4,
      }),
      new DropdownFields({
        key: 'state',
        label: 'State',
        required: true,
        options: state,
        value: '',
        order: 2,
      }),
      new DropdownFields({
        key: 'district',
        label: 'District',
        required: true,
        // options: eval('districts.' + state.value),
        options: '',
        order: 2,
        depend: 'state',
        dependValue: districts
      }),
      new DropdownFields({
        key: 'taluka',
        label: 'Taluka',
        required: true,
        options: '',
        value: '',
        order: 2,
        depend: 'district',
        dependValue: taluka
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
