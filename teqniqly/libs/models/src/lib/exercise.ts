import { Model, NamedModel } from './base-interfaces';

export interface Exercise extends Model, NamedModel {
  id: string;
  name: string;
}
