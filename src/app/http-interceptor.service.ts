import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url === 'https://jsonplaceholder.typicode.com/users') {
      return next.handle(request); // do nothing
    } else {
      request = request.clone({
        setHeaders: {
          Token: 'Api with auth token'
        }
      });
    }

    return next.handle(request);
  }
}
