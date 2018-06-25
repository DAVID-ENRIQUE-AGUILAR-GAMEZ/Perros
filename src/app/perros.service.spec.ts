import { TestBed, inject } from '@angular/core/testing';

import { PerrosService } from './perros.service';

describe('PerrosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerrosService]
    });
  });

  it('should be created', inject([PerrosService], (service: PerrosService) => {
    expect(service).toBeTruthy();
  }));
});
