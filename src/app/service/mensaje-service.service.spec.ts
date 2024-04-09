import { TestBed } from '@angular/core/testing';

import { Mensajero } from './mensaje-service.service';

describe('MensajeServiceService', () => {
  let service: Mensajero;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mensajero);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
