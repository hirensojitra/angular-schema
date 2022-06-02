import { Component } from '@angular/core';

import { FormService } from './form/form.service';
import { FormBase } from './form/form-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Form Schema</h2>
      <app-dynamic-form [fields]="fields$ | async"></app-dynamic-form>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
  providers: [FormService],
})
export class AppComponent {
  fields$: Observable<FormBase<any>[]>;

  constructor(service: FormService) {
    this.fields$ = service.getFields();
  }
}
