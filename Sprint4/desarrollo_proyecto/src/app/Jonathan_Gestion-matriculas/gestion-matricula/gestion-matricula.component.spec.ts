import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMatriculaComponent } from './gestion-matricula.component';

describe('GestionMatriculaComponent', () => {
  let component: GestionMatriculaComponent;
  let fixture: ComponentFixture<GestionMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionMatriculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
