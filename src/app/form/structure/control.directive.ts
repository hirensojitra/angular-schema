import { Directive, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FieldsControlService } from '../form-control.service';
import { FormBase } from '../form-base';

@Directive({
  selector: '[control]'
})
export class ControlDirective implements OnInit {
  @Input() formData: any;
  @Input() id: any;
  fieldsData: FormBase<string>[] | null = [];
  form!: FormGroup;
  constructor(private renderer: Renderer2, private eRef: ElementRef, private fcs: FieldsControlService) {

  }
  ngOnInit() {
    console.log(this.formData)
    this.fieldsData = this.formData[0];
    var formData: FormBase<string>[] = this.formData[1];
    formData.forEach((currentValue:any, index:number) => {
      console.log(currentValue)
    });
  }
}
