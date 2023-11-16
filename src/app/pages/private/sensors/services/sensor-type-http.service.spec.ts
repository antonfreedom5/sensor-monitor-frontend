import { TestBed } from '@angular/core/testing';

import { SensorTypeHttpService } from './sensor-type-http.service';

describe('SensorTypeHttpService', () => {
  let service: SensorTypeHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensorTypeHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
