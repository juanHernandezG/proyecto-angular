import { TestBed } from '@angular/core/testing';

import { ModalAddStockService } from './modal-add-stock.service';

describe('ModalAddStockService', () => {
  let service: ModalAddStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalAddStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
