import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAvailableAgentsComponent } from './show-available-agents.component';

describe('ShowAvailableAgentsComponent', () => {
  let component: ShowAvailableAgentsComponent;
  let fixture: ComponentFixture<ShowAvailableAgentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAvailableAgentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAvailableAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
