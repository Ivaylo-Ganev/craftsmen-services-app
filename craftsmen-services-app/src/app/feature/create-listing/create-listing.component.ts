import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FeatureService } from '../feature.service';


@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.css']
})
export class CreateListingComponent {

  constructor(private featureService: FeatureService) {}

  createListingSubmitHandler(form: NgForm): void {
    if(form.invalid) {
      return;
    }
    const {name, category, photo, phone, email, desc} = form.value;
    this.featureService.createListing(name, category, photo, phone, email, desc).subscribe(data => {
      console.log(data);
      
    })
  }
}
