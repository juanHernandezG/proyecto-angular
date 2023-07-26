import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenedorEnvioComponent } from './mantenedor-envio.component';

describe('MantenedorEnvioComponent', () => {
  let component: MantenedorEnvioComponent;
  let fixture: ComponentFixture<MantenedorEnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenedorEnvioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenedorEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
