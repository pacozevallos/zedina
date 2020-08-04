import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyLineaResComponent } from './body-linea-res.component';

describe('BodyLineaResComponent', () => {
  let component: BodyLineaResComponent;
  let fixture: ComponentFixture<BodyLineaResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyLineaResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyLineaResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
