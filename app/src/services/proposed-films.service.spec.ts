import { TestBed } from '@angular/core/testing';

import { ProposedFilmsService } from './proposed-films.service';

describe('ProposedFilmsService', () => {
  let service: ProposedFilmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProposedFilmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
