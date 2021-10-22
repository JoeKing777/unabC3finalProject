import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMatriculasEliminarComponent } from './gestion-matriculas-eliminar.component';

describe('GestionMatriculasEliminarComponent', () => {
  let component: GestionMatriculasEliminarComponent;
  let fixture: ComponentFixture<GestionMatriculasEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionMatriculasEliminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionMatriculasEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
