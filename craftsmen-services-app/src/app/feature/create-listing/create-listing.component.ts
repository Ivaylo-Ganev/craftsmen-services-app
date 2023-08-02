import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FeatureService } from '../feature.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.css']
})
export class CreateListingComponent {

  constructor(private featureService: FeatureService, private router: Router) {}

  createListingSubmitHandler(form: NgForm): void {
    if(form.invalid) {
      return;
    }
    const {name, category, photo, phone, email, desc} = form.value;
    this.featureService.createListing(name, category, photo, phone, email, desc).subscribe(() => {
        this.router.navigate(['/listings']);
    })
  }
}
