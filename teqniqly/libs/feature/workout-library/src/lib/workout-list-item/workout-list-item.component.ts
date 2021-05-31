import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Workout } from '@teqniqly/models';

@Component({
  selector: 'teqniqly-workout-list-item',
  templateUrl: './workout-list-item.component.html',
  styleUrls: ['./workout-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutListItemComponent implements OnInit {
  @Input() workout: Workout;

  constructor() {}

  ngOnInit(): void {}
}
