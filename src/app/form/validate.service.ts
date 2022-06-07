import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, AbstractFormGroupDirective, FormControl } from '@angular/forms';
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
  //To Validate Input Match
  ConfirmedValidator(compare: any,label:string): ValidatorFn {
    return (control: AbstractControl): any => {
      if (compare.errors && compare.errors['confirmedValidator']) {
        return;
      }
      if (control.value !== compare.value) {
        control.setErrors({ confirmedValidator: label });
        return control.errors
      } else {
        control.setErrors(null);
        return null
      }
    }
  }
  // To Validate Minimum Character : n
  minCharacter(n: number): ValidatorFn {
    return (control: AbstractControl): any => {
      let v = "/^.{" + n + ",}$/"
      let reg = new RegExp(eval(v));
      if (!reg.test(control.value)) {
        control.setErrors({ minCharacter: n });
        return control.errors
      } else {
        control.setErrors(control.errors)
        control.reset
        return null
      }
    }
  }
  // To Validate Maximum Character : n
  maxCharacter(n: number): ValidatorFn {
    return (control: AbstractControl): any => {
      let v = "/^.{0," + n + "}$/"
      let reg = new RegExp(eval(v));
      if (!reg.test(control.value)) {
        control.setErrors({ maxCharacter: n });
        return control.errors
      } else {
        control.setErrors(control.errors)
        control.reset
        return null
      }
    }
  }
  // To Validate Minimum Lower Character : n
  minLowerCharacter(n: number): ValidatorFn {
    return (control: AbstractControl): any => {
      let v = "/^(?=.*?[a-z]).{" + n + ",}$/"
      let reg = new RegExp(eval(v));
      if (!reg.test(control.value)) {
        control.setErrors({ minLowerCharacter: n });
        return control.errors
      } else {
        control.setErrors(control.errors)
        control.reset
        return null
      }
    }
  }
  // To Validate Maximum Lower Character : n
  maxLowerCharacter(n: number): ValidatorFn {
    return (control: AbstractControl): any => {
      let v = "/^(?!(?:[^a-z]*[a-z]){"+(n+1)+"})[\\d\\D]*$/"
      let reg = new RegExp(eval(v));
      if (!reg.test(control.value)) {
        control.setErrors({ maxLowerCharacter: n });
        return control.errors
      } else {
        control.setErrors(control.errors)
        control.reset
        return null
      }
    }
  }
  // To Validate Minimum Upper Character : n
  minUpperCharacter(n: number): ValidatorFn {
    return (control: AbstractControl): any => {
      let v = "/^(?=.*?[A-Z]).{" + n + ",}$/"
      let reg = new RegExp(eval(v));
      if (!reg.test(control.value)) {
        control.setErrors({ minUpperCharacter: n });
        return control.errors
      } else {
        control.setErrors(control.errors)
        control.reset
        return null
      }
    }
  }
  // To Validate Maximum Lower Character : n
  maxUpperCharacter(n: number): ValidatorFn {
    return (control: AbstractControl): any => {
      let v = "/^(?!(?:[^A-Z]*[A-Z]){"+(n+1)+"})[\\d\\D]*$/"
      let reg = new RegExp(eval(v));
      if (!reg.test(control.value)) {
        control.setErrors({ maxUpperCharacter: n });
        return control.errors
      } else {
        control.setErrors(control.errors)
        control.reset
        return null
      }
    }
  }
  // To Validate Minimum Special Character : n
  minSpecialCharacter(n: number): ValidatorFn {
    return (control: AbstractControl): any => {
      let v = "/^(?=.*?[@$!%*#?&]).{" + n + ",}$/"
      let reg = new RegExp(eval(v));
      if (!reg.test(control.value)) {
        control.setErrors({ minSpecialCharacter: n });
        return control.errors
      } else {
        control.setErrors(control.errors)
        control.reset
        return null
      }
    }
  }
  // To Validate Maximum Special Character : n
  maxSpecialCharacter(n: number): ValidatorFn {
    return (control: AbstractControl): any => {
      let v = "/^(?!(?:[^@$!%*#?&]*[@$!%*#?&]){"+(n+1)+"})[\\d\\D]*$/"
      let reg = new RegExp(eval(v));
      if (!reg.test(control.value)) {
        control.setErrors({ maxSpecialCharacter: n });
        return control.errors
      } else {
        control.setErrors(control.errors)
        control.reset
        return null
      }
    }
  }
  // To Validate Minimum Digit : n
  minDigitCharacter(n: number): ValidatorFn {
    return (control: AbstractControl): any => {
      let v = "/^(?=.*?[0-9]).{" + n + ",}$/"
      let reg = new RegExp(eval(v));
      if (!reg.test(control.value)) {
        control.setErrors({ minDigitCharacter: n });
        return control.errors
      } else {
        control.setErrors(control.errors)
        control.reset
        return null
      }
    }
  }
  // To Validate Maximum Special Character : n
  maxDigitCharacter(n: number): ValidatorFn {
    return (control: AbstractControl): any => {
      let v = "/^(?!(?:[^0-9]*[0-9]){"+(n+1)+"})[\\d\\D]*$/"
      console.log(v)
      let reg = new RegExp(eval(v));
      if (!reg.test(control.value)) {
        control.setErrors({ 'maxDigitCharacter': n });
        return control.errors
      } else {
        control.setErrors(control.errors)
        control.reset
        return null
      }
    }
  }
}
