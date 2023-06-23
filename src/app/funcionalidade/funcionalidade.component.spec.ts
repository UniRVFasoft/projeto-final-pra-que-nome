import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionalidadeComponent } from './funcionalidade.component';

describe('FuncionalidadeComponent', () => {
  let component: FuncionalidadeComponent;
  let fixture: ComponentFixture<FuncionalidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionalidadeComponent]
    });
    fixture = TestBed.createComponent(FuncionalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});