import { TestBed } from '@angular/core/testing';

import { SensorHttpService } from './sensor-http.service';

describe('SensorHttpService', () => {
  let service: SensorHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensorHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
