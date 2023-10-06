import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLivraisonComponent } from './detail-livraison.component';

describe('DetailLivraisonComponent', () => {
  let component: DetailLivraisonComponent;
  let fixture: ComponentFixture<DetailLivraisonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailLivraisonComponent]
    });
    fixture = TestBed.createComponent(DetailLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
