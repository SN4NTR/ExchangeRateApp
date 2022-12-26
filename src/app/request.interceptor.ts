import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let sessionId = sessionStorage.getItem('sessionId');
    if (sessionId) {
      request = request.clone({
        withCredentials: true
      });
    }
    return next.handle(request);
  }
}
