import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingsComponent } from './listings/listings.component';
import { CreateListingComponent } from './create-listing/create-listing.component';

const routes: Routes = [
  {
    path: 'listings',
    children: [
        {path: '', pathMatch: 'full', component: ListingsComponent},
        {path: 'create', component: CreateListingComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
