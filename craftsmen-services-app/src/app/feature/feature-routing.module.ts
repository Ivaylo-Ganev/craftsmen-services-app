import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingsComponent } from './listings/listings.component';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';

const routes: Routes = [
  {
    path: 'listings',
    children: [
      { path: '', pathMatch: 'full', component: ListingsComponent },
      { path: ':listingId', component: ListingDetailsComponent },
    ],
  },
  { path: 'create', component: CreateListingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
