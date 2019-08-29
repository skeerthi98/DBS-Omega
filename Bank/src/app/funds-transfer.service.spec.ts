import { TestBed } from '@angular/core/testing';

import { FundsTransferService } from './funds-transfer.service';

describe('FundsTransferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FundsTransferService = TestBed.get(FundsTransferService);
    expect(service).toBeTruthy();
  });
});
