import { TestBed } from '@angular/core/testing';

import { LeadDetailsService } from './lead-details.service';

describe('LeadDetailsService', () => {
  let service: LeadDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeadDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
