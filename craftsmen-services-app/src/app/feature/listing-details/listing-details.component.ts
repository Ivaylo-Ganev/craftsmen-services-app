import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../feature.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from 'src/app/types/listing';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css']
})
export class ListingDetailsComponent implements OnInit {
  listing: Listing | undefined;

  constructor(private featureService: FeatureService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.fetchListing();
  }

  fetchListing() {
    const listingId = this.activatedRoute.snapshot.params['listingId'];
    this.featureService.getListing(listingId).subscribe(listing => {
      this.listing = listing;
    })
  }

  editListingHandler() {
    
  }
}
