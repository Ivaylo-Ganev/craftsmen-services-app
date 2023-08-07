import { Component, OnInit } from '@angular/core';
import { FeatureService } from 'src/app/feature/feature.service';
import { Listing } from 'src/app/types/listing';
import { AuthService } from '../auth.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  listings: Listing[] = [];
  isLoading: boolean = true;

  constructor(private featureService: FeatureService, private authService: AuthService) {}

  get user(): User {
    return this.authService.user!;
  }
  ngOnInit(): void {
    const {_id} = this.authService.user!;
    this.fetchUserListings(_id);
  }
  fetchUserListings(userId: string) {
    this.featureService.getUserListings(userId).subscribe({
      next: (listings) => {
        this.listings = listings;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    })
  }
}
