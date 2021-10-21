import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarActualizarIComponent } from './gestionar-actualizar-i.component';

describe('GestionarActualizarIComponent', () => {
  let component: GestionarActualizarIComponent;
  let fixture: ComponentFixture<GestionarActualizarIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarActualizarIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarActualizarIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
