import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLivraisonComponent } from './list-livraison.component';

describe('ListLivraisonComponent', () => {
  let component: ListLivraisonComponent;
  let fixture: ComponentFixture<ListLivraisonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListLivraisonComponent]
    });
    fixture = TestBed.createComponent(ListLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
