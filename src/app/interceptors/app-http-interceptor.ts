import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Auth } from '../services/auth';


@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private authService : Auth) {}

  intercept(request: HttpRequest<unknown>,
            next: HttpHandler): Observable<HttpEvent<unknown>> {
console.log("intercept request");
console.log(request);
    if(!request.url.includes("/auth/login")){
      let newRequest = request.clone({
        headers : request.headers.set('Authorization',
          'Bearer '+this.authService.accessToken)
      })
      return next.handle(newRequest).pipe(
        catchError(err=>{
          if(err.status==401){
            this.authService.logout();
          }
          return throwError(err.message);
        })
      );
    } else return next.handle(request);

  }
}
