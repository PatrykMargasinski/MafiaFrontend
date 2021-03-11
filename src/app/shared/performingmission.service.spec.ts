import { TestBed } from '@angular/core/testing';

import { PerformingMissionService } from './performingmission.service';

describe('PerformedmissionService', () => {
  let service: PerformingMissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerformingMissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
