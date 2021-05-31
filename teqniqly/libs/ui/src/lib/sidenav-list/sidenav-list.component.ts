import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'teqniqly-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css'],
})
export class SidenavListComponent implements OnInit {
  @Output()
  closeSidenav = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onCloseSidenav() {
    this.closeSidenav.emit();
  }
}
