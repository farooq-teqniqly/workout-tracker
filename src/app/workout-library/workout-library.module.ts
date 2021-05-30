import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutListItemComponent } from './workout-list/workout-list-item/workout-list-item.component';
import { PhaseListComponent } from './phase-list/phase-list.component';
import { LibraryHomeComponent } from './library-home/library-home.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';

@NgModule({
  declarations: [
    WorkoutListComponent,
    WorkoutListItemComponent,
    PhaseListComponent,
  ],
  imports: [CommonModule],
  exports: [WorkoutListItemComponent, PhaseListComponent],
})
export class WorkoutLibraryModule {}
