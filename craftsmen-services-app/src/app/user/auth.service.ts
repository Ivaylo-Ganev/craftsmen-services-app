import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/user';
import { tap } from 'rxjs';

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

  get isLogged() {
    return !!this.user;
  }

  constructor(private http: HttpClient) { }

  register(email: string, username: string, password: string) {
    return this.http.post<User>('/api/users/register', {email, username, password}).pipe(tap(user => {
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
    return this.http.get('/api/users/logout').pipe(tap(() => {
      this.user = undefined;
      localStorage.removeItem(this.USER_KEY);
    }));
  }

}
