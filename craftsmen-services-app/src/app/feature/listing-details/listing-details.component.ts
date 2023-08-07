import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../feature.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from 'src/app/types/listing';
import { AuthService } from 'src/app/user/auth.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css'],
})
export class ListingDetailsComponent implements OnInit {
  listing: Listing | undefined;
  isLoading: boolean = true;
  currentUser: User | undefined;

  constructor(
    private featureService: FeatureService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchListing();
    this.currentUser = this.authService.currentUser;
  }

  get isOwner() {
    return this.currentUser?._id === this.listing?._ownerId ? true : false;
  }

  fetchListing() {
    const listingId = this.activatedRoute.snapshot.params['listingId'];
    this.featureService.getListing(listingId).subscribe({
      next: (listing) => {
        this.listing = listing;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }

  editListingHandler(listingId: string) {
    this.router.navigate([`/listings/${listingId}/edit`]);
  }

  deleteListingHandler(listingId: string) {
    const choice = confirm('Are you sure you want to delete this listing?');
    if (choice) {
      this.featureService.deleteListing(listingId).subscribe(() => {
        this.router.navigate(['/listings']);
      });
    } else {
      this.router.navigate([`/listings/${listingId}`]);
    }
  }
}
