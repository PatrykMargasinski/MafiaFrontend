import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMissionsComponent } from './show-missions.component';

describe('ShowMissionsComponent', () => {
  let component: ShowMissionsComponent;
  let fixture: ComponentFixture<ShowMissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
