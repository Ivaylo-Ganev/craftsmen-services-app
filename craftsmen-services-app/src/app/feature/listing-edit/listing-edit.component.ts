import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FeatureService } from '../feature.service';
import { Listing } from 'src/app/types/listing';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing-edit',
  templateUrl: './listing-edit.component.html',
  styleUrls: ['./listing-edit.component.css']
})
export class ListingEditComponent implements OnInit {
  listing: Listing | undefined;

  constructor(private featureService: FeatureService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.fetchListing();    
  }

  fetchListing() {
    const listingId = this.activatedRoute.snapshot.params['listingId'];
    this.featureService.getListing(listingId).subscribe(listing => {
      this.listing = listing;
    })
  }

  editListingSubmitHandler(form: NgForm) {

  }
}
