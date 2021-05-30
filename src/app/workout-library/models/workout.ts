import { Model, NamedModel, UserScopedModel } from './base-interfaces';

export interface Workout extends Model, NamedModel, UserScopedModel {
  id: string;
  name: string;
  userId: string;
}
