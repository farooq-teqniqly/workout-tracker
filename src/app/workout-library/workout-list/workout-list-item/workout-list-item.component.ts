import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Workout } from '../../models/workout';

@Component({
  selector: 'wt-workout-list-item',
  templateUrl: './workout-list-item.component.html',
  styleUrls: ['./workout-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutListItemComponent implements OnInit {
  @Input() workout: Workout;

  constructor() {}

  ngOnInit(): void {}
}
