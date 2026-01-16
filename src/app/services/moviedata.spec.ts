import { TestBed } from '@angular/core/testing';

import { Moviedata } from './moviedata';

describe('Moviedata', () => {
  let service: Moviedata;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Moviedata);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
