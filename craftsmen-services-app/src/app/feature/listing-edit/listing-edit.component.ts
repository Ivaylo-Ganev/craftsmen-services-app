import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FeatureService } from '../feature.service';
import { Listing } from 'src/app/types/listing';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listing-edit',
  templateUrl: './listing-edit.component.html',
  styleUrls: ['./listing-edit.component.css']
})
export class ListingEditComponent implements OnInit {
  listing: Listing | undefined;
  listingId = this.activatedRoute.snapshot.params['listingId'];

  constructor(private featureService: FeatureService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.fetchListing();    
  }

  fetchListing() {
    this.featureService.getListing(this.listingId).subscribe((listing) => {
      this.listing = listing;
    })
  }

  editListingSubmitHandler(form: NgForm) {
    if(form.invalid) {
      return;
    }
    const {name, category, photo, phone, email, desc} = form.value;
    this.featureService.updateListing(name, category, photo, phone, email, desc, this.listingId).subscribe(() => {
        this.router.navigate([`/listings/${this.listingId}`]);
    })
  }
}
