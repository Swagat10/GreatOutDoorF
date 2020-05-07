import { TestBed } from '@angular/core/testing';

import { OrderServeService } from './order-serve.service';

describe('OrderServeService', () => {
  let service: OrderServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
