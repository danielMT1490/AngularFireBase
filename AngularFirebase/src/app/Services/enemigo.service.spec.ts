import { TestBed } from '@angular/core/testing';

import { EnemigoService } from './enemigo.service';

describe('EnemigoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnemigoService = TestBed.get(EnemigoService);
    expect(service).toBeTruthy();
  });
});
