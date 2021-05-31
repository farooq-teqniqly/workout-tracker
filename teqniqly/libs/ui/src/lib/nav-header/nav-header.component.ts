import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'teqniqly-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css'],
})
export class NavHeaderComponent implements OnInit {
  @Output()
  sidenavToggle = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
}
