import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMatriculaActualizarComponent } from './gestion-matricula-actualizar.component';

describe('GestionMatriculaActualizarComponent', () => {
  let component: GestionMatriculaActualizarComponent;
  let fixture: ComponentFixture<GestionMatriculaActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionMatriculaActualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionMatriculaActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
