import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointJournalierComponent } from './point-journalier.component';

describe('PointJournalierComponent', () => {
  let component: PointJournalierComponent;
  let fixture: ComponentFixture<PointJournalierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PointJournalierComponent]
    });
    fixture = TestBed.createComponent(PointJournalierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
