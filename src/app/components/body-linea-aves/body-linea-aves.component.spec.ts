import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyLineaAvesComponent } from './body-linea-aves.component';

describe('BodyLineaAvesComponent', () => {
  let component: BodyLineaAvesComponent;
  let fixture: ComponentFixture<BodyLineaAvesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyLineaAvesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyLineaAvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
