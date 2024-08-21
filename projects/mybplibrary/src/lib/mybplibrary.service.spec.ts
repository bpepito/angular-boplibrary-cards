import { TestBed } from '@angular/core/testing';

import { MybplibraryService } from './mybplibrary.service';

describe('MybplibraryService', () => {
  let service: MybplibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MybplibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
