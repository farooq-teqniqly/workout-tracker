import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Exercise } from '@teqniqly/models';

@Component({
  selector: 'teqniqly-exercise-list-item',
  templateUrl: './exercise-list-item.component.html',
  styleUrls: ['./exercise-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseListItemComponent implements OnInit {
  @Input() exercise: Exercise;

  constructor() {}

  ngOnInit(): void {}
}
