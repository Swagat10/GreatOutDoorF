import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveRetailerComponent } from './remove-retailer.component';

describe('RemoveRetailerComponent', () => {
  let component: RemoveRetailerComponent;
  let fixture: ComponentFixture<RemoveRetailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveRetailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
