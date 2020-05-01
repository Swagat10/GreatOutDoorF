import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindRetailerComponent } from './find-retailer.component';

describe('FindRetailerComponent', () => {
  let component: FindRetailerComponent;
  let fixture: ComponentFixture<FindRetailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindRetailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
