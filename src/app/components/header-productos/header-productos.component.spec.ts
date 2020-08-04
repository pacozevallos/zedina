import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderProductosComponent } from './header-productos.component';

describe('HeaderProductosComponent', () => {
  let component: HeaderProductosComponent;
  let fixture: ComponentFixture<HeaderProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
