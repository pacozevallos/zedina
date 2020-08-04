import { TestBed, inject } from '@angular/core/testing';

import { ProductoResolver } from './producto-resolver.service';

describe('ProductoResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductoResolver]
    });
  });

  it('should be created', inject([ProductoResolver], (service: ProductoResolver) => {
    expect(service).toBeTruthy();
  }));
});
