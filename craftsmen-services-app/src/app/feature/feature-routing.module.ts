import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingsComponent } from './listings/listings.component';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { ListingEditComponent } from './listing-edit/listing-edit.component';
import { AuthActivate } from '../core/guards/auth.activate';

const routes: Routes = [
  {
    path: 'listings',
    children: [
      { path: '', pathMatch: 'full', component: ListingsComponent },
      { path: ':listingId', component: ListingDetailsComponent },
      { path: ':listingId/edit', canActivate: [AuthActivate], component: ListingEditComponent },
    ],
  },
  { path: 'create', canActivate: [AuthActivate], component: CreateListingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
