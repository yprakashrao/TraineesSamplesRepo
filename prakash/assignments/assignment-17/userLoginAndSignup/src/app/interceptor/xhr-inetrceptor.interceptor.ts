import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class XhrInetrceptorInterceptor implements HttpInterceptor {
username:any;
password:any;
  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let httpHeaders = new HttpHeaders();

    if(sessionStorage.getItem('username')){
      this.username = sessionStorage.getItem('username');
    }

    if(sessionStorage.getItem('password')){
      this.password = sessionStorage.getItem('password');
    }

    if(this.username && this.password ){
      httpHeaders = httpHeaders.append('Authorization', 'Basic ' + window.btoa(this.username + ':' + this.password));
    }

    let xsrf = sessionStorage.getItem('XSRF-TOKEN');
    if(xsrf){
      httpHeaders = httpHeaders.append('X-XSRF-TOKEN', xsrf);
    }


    httpHeaders = httpHeaders.append('X-Requested-With', 'XMLHttpRequest');
    const xhr = request.clone({
      headers: httpHeaders
    });

     return next.handle(xhr).pipe(tap(
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 401) {
            return;
          }
          this.router.navigate(['data']);
        }
      }));

  }
}






