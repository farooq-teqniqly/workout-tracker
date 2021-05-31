import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseListItemComponent } from './phase-list-item.component';

describe('PhaseListItemComponent', () => {
  let component: PhaseListItemComponent;
  let fixture: ComponentFixture<PhaseListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhaseListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaseListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
