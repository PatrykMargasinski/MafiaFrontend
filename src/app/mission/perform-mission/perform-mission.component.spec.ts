import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformMissionComponent } from './perform-mission.component';

describe('PerformMissionComponent', () => {
  let component: PerformMissionComponent;
  let fixture: ComponentFixture<PerformMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformMissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
