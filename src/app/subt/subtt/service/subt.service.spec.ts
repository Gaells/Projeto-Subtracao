import { TestBed } from '@angular/core/testing';

import { SubtService } from './subt.service';

describe('SubtService', () => {
  let service: SubtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
