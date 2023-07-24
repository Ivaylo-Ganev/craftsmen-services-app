import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { User } from '../types/user';

const {apiUrl} = environment

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(email: string, username: string, password: string) {
    return this.http.post<User>(`${apiUrl}/users/register`, {email, username, password})
  }
}
