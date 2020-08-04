import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyLineaMenudenciaComponent } from './body-linea-menudencia.component';

describe('BodyLineaMenudenciaComponent', () => {
  let component: BodyLineaMenudenciaComponent;
  let fixture: ComponentFixture<BodyLineaMenudenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyLineaMenudenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyLineaMenudenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
