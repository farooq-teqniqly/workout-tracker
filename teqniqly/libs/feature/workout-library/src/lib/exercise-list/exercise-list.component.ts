import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Exercise } from '@teqniqly/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'teqniqly-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseListComponent implements OnInit {
  exercises$: Observable<Exercise[]>;

  constructor() {}

  ngOnInit(): void {}
}
