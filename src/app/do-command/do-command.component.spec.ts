import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoCommandComponent } from './do-command.component';

describe('DoCommandComponent', () => {
  let component: DoCommandComponent;
  let fixture: ComponentFixture<DoCommandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoCommandComponent]
    });
    fixture = TestBed.createComponent(DoCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
