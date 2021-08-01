import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAgentsOnMissionComponent } from './show-agents-on-mission.component';

describe('ShowAgentsOnMissionComponent', () => {
  let component: ShowAgentsOnMissionComponent;
  let fixture: ComponentFixture<ShowAgentsOnMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAgentsOnMissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAgentsOnMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
