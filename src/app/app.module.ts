import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './form/structure/dynamic-form.component';
import { DynamicFormFieldsComponent } from './form/structure/dynamic-form-field.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ControlDirective } from './form/structure/control.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
  ],
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormFieldsComponent,
    ControlDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
