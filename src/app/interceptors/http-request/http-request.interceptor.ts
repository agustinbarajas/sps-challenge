import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

import { ErrorHandleService } from './../../services/error-handle/error-handle.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private readonly errorService: ErrorHandleService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        this.errorService.handle(error);

        return throwError(() => error?.message);
      })
    );
  }
}
