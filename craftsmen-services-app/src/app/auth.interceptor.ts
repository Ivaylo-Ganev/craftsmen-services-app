import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.userService.getToken();

    let req = request;
      if(token) {
        req = request.clone({
          setHeaders: {
            'X-Authorization': token,
            'Content-Type': 'application/json'
          } 
        });
      
      }
    
    return next.handle(req);
  }
}
export const AuthInterceptorProvider: Provider = {
  useClass: AuthInterceptor,
  multi: true,
  provide: HTTP_INTERCEPTORS
}