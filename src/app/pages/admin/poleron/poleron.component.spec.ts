import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoleronComponent } from './poleron.component';

describe('PoleronComponent', () => {
  let component: PoleronComponent;
  let fixture: ComponentFixture<PoleronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoleronComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoleronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
