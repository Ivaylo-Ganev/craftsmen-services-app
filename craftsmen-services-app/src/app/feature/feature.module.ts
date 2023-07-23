import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingsComponent } from './listings/listings.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { CreateListingComponent } from './create-listing/create-listing.component';



@NgModule({
  declarations: [
    ListingsComponent,
    CreateListingComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
