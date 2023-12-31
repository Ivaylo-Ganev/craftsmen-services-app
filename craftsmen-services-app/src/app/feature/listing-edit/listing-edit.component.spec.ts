import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingEditComponent } from './listing-edit.component';

describe('ListingEditComponent', () => {
  let component: ListingEditComponent;
  let fixture: ComponentFixture<ListingEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingEditComponent]
    });
    fixture = TestBed.createComponent(ListingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
