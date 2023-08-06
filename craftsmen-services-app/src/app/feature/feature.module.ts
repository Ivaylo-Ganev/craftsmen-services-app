import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingsComponent } from './listings/listings.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import {FormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListingsComponent,
    CreateListingComponent,
    ListingDetailsComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class FeatureModule { }
