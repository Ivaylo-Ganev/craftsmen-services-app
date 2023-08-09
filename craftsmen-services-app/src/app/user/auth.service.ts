import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/user';
import {BehaviorSubject, tap, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User | undefined
  USER_KEY = '[user]'
  token: string | undefined

  getToken() {
    return this.user?.accessToken;
    
  }

  get currentUser() {
    return this.user;
  }

  get isLogged() {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (err) {
      this.user = undefined;
    }
  
   }

  register(email: string, username: string, phone: string, userPhoto: string, password: string) {
    return this.http.post<User>('/api/users/register', {email, username, phone, userPhoto, password}).pipe(tap(user => {
      this.user = user;
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    }));
  };

  login(email: string, password: string) {
    return this.http.post<User>('/api/users/login', {email, password}).pipe(tap(user => {
      this.user = user;
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    }));
  };

  logout() {
    return this.http.get<User>('/api/users/logout').pipe(tap(() => {
      this.user = undefined;
      localStorage.removeItem(this.USER_KEY);
    }));
  };

  getProfile() {
    return this.http.get<User>('/api/users/me')
  }

}
I have oksdasdpasdf
