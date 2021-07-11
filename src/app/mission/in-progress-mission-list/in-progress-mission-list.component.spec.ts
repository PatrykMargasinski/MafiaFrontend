import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressMissionListComponent } from './in-progress-mission-list.component';

describe('InProgressMissionListComponent', () => {
  let component: InProgressMissionListComponent;
  let fixture: ComponentFixture<InProgressMissionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InProgressMissionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InProgressMissionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
