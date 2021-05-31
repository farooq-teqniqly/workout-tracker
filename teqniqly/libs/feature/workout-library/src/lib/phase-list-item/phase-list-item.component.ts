import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Phase } from '@teqniqly/models';

@Component({
  selector: 'teqniqly-phase-list-item',
  templateUrl: './phase-list-item.component.html',
  styleUrls: ['./phase-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhaseListItemComponent implements OnInit {
  @Input() phase: Phase;

  constructor() {}

  ngOnInit(): void {}
}
