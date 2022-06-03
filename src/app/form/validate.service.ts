import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor() {
  }
  CheckNumber(): ValidatorFn {
    return (control: AbstractControl): any => {
      let reg = new RegExp(/^\d+$/);
      if (!reg.test(control.value)) {
        control.setErrors({ checkNumber: true });
      } else {
        control.setErrors(control.errors)
        control.reset
      }
      return !reg.test(control.value) ? control.errors : null;
    };
  }
  CheckEmail(): ValidatorFn {
    return (control: AbstractControl): any => {
      // Regular Expression
      let reg = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      if (!reg.test(control.value)) {
        control.setErrors({ checkEmail: true });
      } else {
        control.setErrors(control.errors)
        control.reset
      }
      return !reg.test(control.value) ? control.errors : null;
    }
  }
  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      console.log('test')
      if (matchingControl.errors && !matchingControl.errors['confirmedValidator']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
        return control.errors
      } else {
        matchingControl.setErrors(null);
        return null
      }
    }
  }
}
