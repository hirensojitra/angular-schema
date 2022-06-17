import { FormBase } from './form-base';

export class TextareaFields extends FormBase<string> {
  override controlType = 'textarea';
}
