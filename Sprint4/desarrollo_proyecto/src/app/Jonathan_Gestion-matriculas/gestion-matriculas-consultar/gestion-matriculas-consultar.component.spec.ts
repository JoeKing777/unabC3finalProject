import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMatriculasConsultarComponent } from './gestion-matriculas-consultar.component';

describe('GestionMatriculasConsultarComponent', () => {
  let component: GestionMatriculasConsultarComponent;
  let fixture: ComponentFixture<GestionMatriculasConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionMatriculasConsultarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionMatriculasConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
