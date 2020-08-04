import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaAvesComponent } from './linea-aves.component';

describe('LineaAvesComponent', () => {
  let component: LineaAvesComponent;
  let fixture: ComponentFixture<LineaAvesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaAvesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaAvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
