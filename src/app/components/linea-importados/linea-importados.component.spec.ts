import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaImportadosComponent } from './linea-importados.component';

describe('LineaImportadosComponent', () => {
  let component: LineaImportadosComponent;
  let fixture: ComponentFixture<LineaImportadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaImportadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaImportadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
