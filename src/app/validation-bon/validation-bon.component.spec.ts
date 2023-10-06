import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationBonComponent } from './validation-bon.component';

describe('ValidationBonComponent', () => {
  let component: ValidationBonComponent;
  let fixture: ComponentFixture<ValidationBonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidationBonComponent]
    });
    fixture = TestBed.createComponent(ValidationBonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
