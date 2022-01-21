import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { take, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let headers = req.headers;

    return this.authService.user$.pipe(
      take(1),
      exhaustMap((user) => {
        // if user is not authenticated
        if (user != null)
          headers = headers.append(
            'Authorization',
            'Bearer ' + user.accessToken
          );
        headers = headers.append('Content-Type', 'application/json');

        if (!user) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          headers: headers,
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
