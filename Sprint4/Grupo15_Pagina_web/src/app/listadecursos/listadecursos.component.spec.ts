import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadecursosComponent } from './listadecursos.component';

describe('ListadecursosComponent', () => {
  let component: ListadecursosComponent;
  let fixture: ComponentFixture<ListadecursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadecursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
