import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { AuthService } from './user/auth.service';
import { Router } from '@angular/router';
import { ErrorService } from './core/error/error.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router, private errorService: ErrorService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.authService.getToken();
    let req = request;
      if(token) {
        req = request.clone({
          setHeaders: {
            'X-Authorization': token,
            'Content-Type': 'application/json'
          } 
        });
      
      }
    return next.handle(req).pipe(
      catchError((err) => {
       if(err.status === 401) {
        this.router.navigate(['/login']);
       } else if (err.status === 404) {
        return [err]
       } else {
        this.errorService.setError(err);
        this.router.navigate(['/error']);
       }
       
       return [err]
      })
    )
  }
}
export const AuthInterceptorProvider: Provider = {
  useClass: AuthInterceptor,
  multi: true,
  provide: HTTP_INTERCEPTORS
}