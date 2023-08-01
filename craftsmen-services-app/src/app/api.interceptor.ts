import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

const {apiUrl} = environment;

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let req = request;
    if(request.url.startsWith('/api')) {
      req = request.clone({
        url: request.url.replace('/api', apiUrl)      });
    };

    return next.handle(req);
  }

}

export const ApiInterceptorProvider: Provider = {
  useClass: ApiInterceptor,
  multi: true,
  provide: HTTP_INTERCEPTORS
}
