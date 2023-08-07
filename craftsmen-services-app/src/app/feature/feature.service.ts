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
  };

  getListings() {
    return this.http.get<Listing[]>('/api/data/listings');
  }

  getListing(id: string) {
    return this.http.get<Listing>(`/api/data/listings/${id}`);
  }
  getUserListings(userId: string) {
    const searchQuery = encodeURIComponent(`_ownerId="${userId}"`);
    return this.http.get<Listing[]>(`/api/data/listings?where=${searchQuery}`);
  }
  updateListing(name: string, category: string, photo: string, phone: string, email: string, desc: string, id: string) {
    return this.http.put<Listing>(`/api/data/listings/${id}`, {name, category, photo, phone, email, desc});
  }
}
