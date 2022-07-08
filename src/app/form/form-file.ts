import { FormBase } from './form-base';

export class FileFields extends FormBase<string> {
  override controlType = 'file';
}
