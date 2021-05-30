import { Model, NamedModel } from './base-interfaces';

export interface Location extends Model, NamedModel {
  id: string;
  name: string;
}
