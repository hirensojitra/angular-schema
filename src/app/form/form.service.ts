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
      { value: 'AP', text: 'Andhra Pradesh' },
      { value: 'AR', text: 'Arunachal Pradesh' },
      { value: 'AS', text: 'Assam' },
      { value: 'BR', text: 'Bihar' },
      { value: 'CG', text: 'Chhattisgarh' },
      { value: 'GA', text: 'Goa' },
      { value: 'GJ', text: 'Gujarat' },
      { value: 'HR', text: 'Haryana' },
      { value: 'HC', text: 'Himachal' },
      { value: 'JR', text: 'Jharkhand' },
      { value: 'KR', text: 'Karnataka' },
      { value: 'KL', text: 'Kerala' },
      { value: 'MP', text: 'Madhya Pradesh' },
      { value: 'MH', text: 'Maharashtra' },
      { value: 'MN', text: 'Manipur' },
      { value: 'ME', text: 'Meghalaya' },
      { value: 'MI', text: 'Mizoram' },
      { value: 'NA', text: 'Nagaland' },
      { value: 'OD', text: 'Odisha' },
      { value: 'PU', text: 'Punjab' },
      { value: 'RJ', text: 'Rajasthan' },
      { value: 'SK', text: 'Sikkim' },
      { value: 'TN', text: 'Tamil Nadu' },
      { value: 'TG', text: 'Telangana' },
      { value: 'TR', text: 'Tripura' },
      { value: 'UP', text: 'Uttar Pradesh' },
      { value: 'UT', text: 'Uttarakhand' },
      { value: 'WB', text: 'West Bengal' },
      { value: 'AN', text: 'Andaman and Nicobar Islands' },
      { value: 'DD', text: 'Dadra and Nagar Haveli and Daman and Diu' },
      { value: 'JK', text: 'Jammu and Kashmir' },
      { value: 'LK', text: 'Ladakh' },
      { value: 'LD', text: 'Lakshadweep' },
      { value: 'DL', text: 'Delhi' },
      { value: 'PU', text: 'Puducherry' }
    ];
    var districts = [
      { value: 'AHM', text: 'Ahmedabad', filter: 'GJ' },
      { value: 'AMR', text: 'Amreli', filter: 'GJ' },
      { value: 'AND', text: 'Anand', filter: 'GJ' },
      { value: 'ARV', text: 'Aravalli', filter: 'GJ' },
      { value: 'BAN', text: 'Banaskantha (Palanpur)', filter: 'GJ' },
      { value: 'BRC', text: 'Bharuch', filter: 'GJ' },
      { value: 'BHV', text: 'Bhavnagar', filter: 'GJ' },
      { value: 'BOT', text: 'Botad', filter: 'GJ' },
      { value: 'CUP', text: 'Chhota Udepur', filter: 'GJ' },
      { value: 'DHD', text: 'Dahod', filter: 'GJ' },
      { value: 'DNG', text: 'Dangs (Ahwa)', filter: 'GJ' },
      { value: 'DBD', text: 'Devbhoomi Dwarka', filter: 'GJ' },
      { value: 'GND', text: 'Gandhinagar', filter: 'GJ' },
      { value: 'GRS', text: 'Gir Somnath', filter: 'GJ' },
      { value: 'JAM', text: 'Jamnagar', filter: 'GJ' },
      { value: 'JNG', text: 'Junagadh', filter: 'GJ' },
      { value: 'KCH', text: 'Kachchh', filter: 'GJ' },
      { value: 'KHD', text: 'Kheda (Nadiad)', filter: 'GJ' },
      { value: 'MSG', text: 'Mahisagar', filter: 'GJ' },
      { value: 'MEH', text: 'Mehsana', filter: 'GJ' },
      { value: 'MOR', text: 'Morbi', filter: 'GJ' },
      { value: 'MAR', text: 'Narmada (Rajpipla)', filter: 'GJ' },
      { value: 'NVS', text: 'Navsari', filter: 'GJ' },
      { value: 'PNM', text: 'Panchmahal (Godhra)', filter: 'GJ' },
      { value: 'PTN', text: 'Patan', filter: 'GJ' },
      { value: 'PBN', text: 'Porbandar', filter: 'GJ' },
      { value: 'RJK', text: 'Rajkot', filter: 'GJ' },
      { value: 'HIM', text: 'Sabarkantha (Himmatnagar)', filter: 'GJ' },
      { value: 'SRT', text: 'Surat', filter: 'GJ' },
      { value: 'SNG', text: 'Surendranagar', filter: 'GJ' },
      { value: 'TAP', text: 'Tapi (Vyara)', filter: 'GJ' },
      { value: 'VDR', text: 'Vadodara', filter: 'GJ' },
      { value: 'VSD', text: 'Valsad', filter: 'GJ' }
    ];
    var taluka = [
      { value: 'AMR', text: 'Amreli', filter: 'AMR' },
      { value: 'BRB', text: 'Babra', filter: 'AMR' },
      { value: 'BGS', text: 'Bagasara', filter: 'AMR' },
      { value: 'DHR', text: 'Dhari', filter: 'AMR' },
      { value: 'JFB', text: 'Jafrabad', filter: 'AMR' },
      { value: 'KMB', text: 'Khambha', filter: 'AMR' },
      { value: 'KUK', text: 'Kukavav', filter: 'AMR' },
      { value: 'LTH', text: 'Lathi', filter: 'AMR' },
      { value: 'LIY', text: 'Liliya', filter: 'AMR' },
      { value: 'RJL', text: 'Rajula', filter: 'AMR' },
      { value: 'SVK', text: 'Savarkundla', filter: 'AMR' },
      { value: 'MAN', text: 'Mandal', filter: 'AHM' },
      { value: 'DET', text: 'Detroj Rampura', filter: 'AHM' },
      { value: 'VRG', text: 'Viramgam', filter: 'AHM' },
      { value: 'SNS', text: 'Sanand', filter: 'AHM' },
      { value: 'DSK', text: 'Daskroi', filter: 'AHM' },
      { value: 'DHL', text: 'Dholka', filter: 'AHM' },
      { value: 'BVL', text: 'Bavla', filter: 'AHM' },
      { value: 'DND', text: 'Dhandhuka', filter: 'AHM' }
    ];
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
        value: undefined,
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
        dependValue: districts,
      }),
      new DropdownFields({
        key: 'taluka',
        label: 'Taluka',
        required: true,
        options: '',
        value: '',
        order: 2,
        depend: 'district',
        dependValue: taluka,
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
        value: '',
        required: true,
        order: 0,
      }),
      new TextboxFields({
        key: 'lastName',
        label: 'Last name',
        value: '',
        required: true,
        order: 0,
      }),
      new TextboxFields({
        key: 'emailAddress',
        label: 'Email',
        type: 'text',
        order: 1,
        required: true,
        validators: ['CheckEmail']
      }),
      new TextboxFields({
        key: 'password',
        label: 'Password',
        type: 'password',
        order: 1,
        required: true,
        value: 'aA@1',
        validators: [
          { 'minCharacter': 3 },
          { 'maxCharacter': 15 },
          { 'minLowerCharacter': 1 },
          // { 'maxLowerCharacter': 2 },
          { 'minUpperCharacter': 1 },
          // { 'maxUpperCharacter': 2 },
          { 'minSpecialCharacter': 1 },
          // { 'maxSpecialCharacter': 2 },
          { 'minDigitCharacter': 1 },
          // { 'maxDigitCharacter': 2 }
        ]
      }),
      new TextboxFields({
        key: 'confirmPassword',
        label: 'Confirm Password',
        type: 'password',
        order: 1,
        value: 'aA@1',
        validators: [
          { 'match': 'password' }
        ]
      }),
    ];
    return of(fields.sort((a, b) => a.order - b.order));
  }
}
