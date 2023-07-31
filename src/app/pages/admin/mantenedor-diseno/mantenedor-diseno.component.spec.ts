import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenedorDisenoComponent } from './mantenedor-diseno.component';

describe('MantenedorDisenoComponent', () => {
  let component: MantenedorDisenoComponent;
  let fixture: ComponentFixture<MantenedorDisenoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantenedorDisenoComponent]
    });
    fixture = TestBed.createComponent(MantenedorDisenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
