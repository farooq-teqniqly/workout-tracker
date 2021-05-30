import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Workout } from '../models/workout';

@Component({
  selector: 'wt-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutListComponent implements OnInit {
  workouts$: Observable<Workout[]>;

  constructor() {}

  ngOnInit(): void {}
}
