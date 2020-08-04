import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyLineaCerdoComponent } from './body-linea-cerdo.component';

describe('BodyLineaCerdoComponent', () => {
  let component: BodyLineaCerdoComponent;
  let fixture: ComponentFixture<BodyLineaCerdoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyLineaCerdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyLineaCerdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
