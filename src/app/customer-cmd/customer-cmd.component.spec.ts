import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCmdComponent } from './customer-cmd.component';

describe('CustomerCmdComponent', () => {
  let component: CustomerCmdComponent;
  let fixture: ComponentFixture<CustomerCmdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerCmdComponent]
    });
    fixture = TestBed.createComponent(CustomerCmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
