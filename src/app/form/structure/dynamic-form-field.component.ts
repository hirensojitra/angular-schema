import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox/checkbox';

import { FormBase } from '../form-base';
import { FieldsControlService } from '../form-control.service';

@Component({
  selector: 'app-field',
  templateUrl: './dynamic-form-field.component.html',
})
export class DynamicFormFieldsComponent {
  @Input() field!: FormBase<string>;
  @Input() form!: FormGroup;
  constructor(private qcs: FieldsControlService){}
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
  errorMsg(l:any, error:any){
    return this.qcs.errorMsg(l,error)
  }
  fileClick(id:string){
    const inputNode: any = document.querySelector('#'+id);
    inputNode.click()
  }
  onFileSelected(id:string) {
    const inputNode: any = document.querySelector('#'+id);

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        // this.srcResult = e.target.result;
      };

      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }
}
