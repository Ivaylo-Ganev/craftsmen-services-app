import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingsComponent } from './listings/listings.component';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { ListingEditComponent } from './listing-edit/listing-edit.component';

const routes: Routes = [
  {
    path: 'listings',
    children: [
      { path: '', pathMatch: 'full', component: ListingsComponent },
      { path: ':listingId', component: ListingDetailsComponent },
      { path: ':listingId/edit', component: ListingEditComponent },
    ],
  },
  { path: 'create', component: CreateListingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
