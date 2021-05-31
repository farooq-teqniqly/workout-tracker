import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutListItemComponent } from './workout-list-item/workout-list-item.component';
import { WorkoutLibraryComponent } from './workout-library/workout-library.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    WorkoutListComponent,
    WorkoutListItemComponent,
    WorkoutLibraryComponent,
  ],
  exports: [WorkoutLibraryComponent],
})
export class FeatureWorkoutLibraryModule {}
