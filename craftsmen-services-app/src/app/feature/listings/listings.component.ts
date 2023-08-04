import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../feature.service';
import { Listing } from 'src/app/types/listing';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit{
  listings: Listing[] = [];

  constructor(private featureService: FeatureService) {}

  ngOnInit(): void {
    this.fetchListings();
  }
  fetchListings() {
    this.featureService.getListings().subscribe({
      next: (listings) => {
        this.listings = listings;
      },
      error: () => {
        this.listings = [];
      }
    })
  }

}
