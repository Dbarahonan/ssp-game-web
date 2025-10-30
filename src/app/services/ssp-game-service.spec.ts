import { TestBed } from '@angular/core/testing';

import { SspGameService } from './ssp-game-service';

describe('SspGameService', () => {
  let service: SspGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SspGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
