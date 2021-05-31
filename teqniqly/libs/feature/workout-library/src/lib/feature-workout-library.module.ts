import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutListItemComponent } from './workout-list-item/workout-list-item.component';
import { WorkoutLibraryComponent } from './workout-library/workout-library.component';
import { PhaseListComponent } from './phase-list/phase-list.component';
import { PhaseListItemComponent } from './phase-list-item/phase-list-item.component';
import { ExerciseListItemComponent } from './exercise-list-item/exercise-list-item.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    WorkoutListComponent,
    WorkoutListItemComponent,
    WorkoutLibraryComponent,
    PhaseListComponent,
    PhaseListItemComponent,
    ExerciseListItemComponent,
    ExerciseListComponent,
  ],
  exports: [
    WorkoutLibraryComponent,
    PhaseListComponent,
    PhaseListItemComponent,
    ExerciseListItemComponent,
    ExerciseListComponent,
  ],
})
export class FeatureWorkoutLibraryModule {}
