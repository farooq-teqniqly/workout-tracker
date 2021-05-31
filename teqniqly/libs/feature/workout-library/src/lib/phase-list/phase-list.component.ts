import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Phase } from '@teqniqly/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'teqniqly-phase-list',
  templateUrl: './phase-list.component.html',
  styleUrls: ['./phase-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhaseListComponent implements OnInit {
  phases$: Observable<Phase[]>;

  constructor() {}

  ngOnInit(): void {}
}
