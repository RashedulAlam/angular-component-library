import { TestBed } from '@angular/core/testing';

import { DemoDsService } from './demo-ds.service';

describe('DemoDsService', () => {
  let service: DemoDsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoDsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
