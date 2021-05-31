import { Model, NamedModel } from './base-interfaces';

export class Phase implements Model, NamedModel {
  id: string;
  name: string;
}
