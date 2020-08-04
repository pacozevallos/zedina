import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaResComponent } from './linea-res.component';

describe('LineaResComponent', () => {
  let component: LineaResComponent;
  let fixture: ComponentFixture<LineaResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
