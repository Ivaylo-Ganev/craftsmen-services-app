import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Listing } from '../types/listing';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor(private http: HttpClient) { }

  createListing(name: string, category: string, photo: string, phone: string, email: string, desc: string) {
    return this.http.post<Listing>('/api/data/listings', {name, category, photo, phone, email, desc});
  }
}
