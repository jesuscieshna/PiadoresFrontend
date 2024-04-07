import { TestBed } from '@angular/core/testing';

import { MensajeServiceService } from './mensaje-service.service';

describe('MensajeServiceService', () => {
  let service: MensajeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensajeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
