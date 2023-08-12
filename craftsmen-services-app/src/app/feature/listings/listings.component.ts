import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../feature.service';
import { Listing } from 'src/app/types/listing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit{
  listings: Listing[] = [];
  isLoading: boolean = true;

  constructor(private featureService: FeatureService, private router: Router) {}

  ngOnInit(): void {
    this.fetchListings();
  }
  fetchListings() {
    this.featureService.getListings().subscribe({
      next: (listings) => {
        this.listings = listings;
        this.isLoading = false;
      }
    })
  }
  detailsHandler(listingId: string): void {
    this.router.navigate([`/listings/${listingId}`]);
  }

}
