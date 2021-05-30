import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wt-library-home',
  templateUrl: './library-home.component.html',
  styleUrls: ['./library-home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LibraryHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
