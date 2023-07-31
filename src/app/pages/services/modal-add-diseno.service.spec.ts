import { TestBed } from '@angular/core/testing';

import { ModalAddDisenoService } from './modal-add-diseno.service';

describe('ModalAddDisenoService', () => {
  let service: ModalAddDisenoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalAddDisenoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
