import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Workout } from '@teqniqly/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'teqniqly-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutListComponent implements OnInit {
  workouts$: Observable<Workout[]>;

  constructor() {}

  ngOnInit(): void {}
}
