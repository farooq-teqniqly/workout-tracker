import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutLibraryComponent } from './workout-library.component';

describe('WorkoutLibraryComponent', () => {
  let component: WorkoutLibraryComponent;
  let fixture: ComponentFixture<WorkoutLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
