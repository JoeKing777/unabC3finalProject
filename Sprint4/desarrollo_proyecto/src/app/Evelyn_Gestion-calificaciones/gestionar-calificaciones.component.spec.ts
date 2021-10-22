import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarCalificacionesComponent } from './gestionar-calificaciones.component';

describe('GestionarCalificacionesComponent', () => {
  let component: GestionarCalificacionesComponent;
  let fixture: ComponentFixture<GestionarCalificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarCalificacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
