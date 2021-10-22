import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionBorrarComponent } from './gestion-borrar.component';

describe('GestionBorrarComponent', () => {
  let component: GestionBorrarComponent;
  let fixture: ComponentFixture<GestionBorrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionBorrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
