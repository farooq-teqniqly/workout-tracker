import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Phase } from '../models/phase';

@Component({
  selector: 'wt-phase-list',
  templateUrl: './phase-list.component.html',
  styleUrls: ['./phase-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhaseListComponent implements OnInit {
  $phases: Observable<Phase>;
  constructor() {}

  ngOnInit(): void {}
}
