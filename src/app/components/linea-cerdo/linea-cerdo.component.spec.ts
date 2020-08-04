import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaCerdoComponent } from './linea-cerdo.component';

describe('LineaCerdoComponent', () => {
  let component: LineaCerdoComponent;
  let fixture: ComponentFixture<LineaCerdoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaCerdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaCerdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
