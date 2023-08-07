import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDeleteComponent } from './listing-delete.component';

describe('ListingDeleteComponent', () => {
  let component: ListingDeleteComponent;
  let fixture: ComponentFixture<ListingDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingDeleteComponent]
    });
    fixture = TestBed.createComponent(ListingDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
