import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddDisenoComponent } from './modal-add-diseno.component';

describe('ModalAddDisenoComponent', () => {
  let component: ModalAddDisenoComponent;
  let fixture: ComponentFixture<ModalAddDisenoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAddDisenoComponent]
    });
    fixture = TestBed.createComponent(ModalAddDisenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
