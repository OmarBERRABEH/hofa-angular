import { inject } from '@angular/core';
import {
  HttpRequest,
  HttpErrorResponse,
  HttpHandlerFn,
  HttpInterceptorFn,
} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoggerAdapter } from '../adapters/logger/logger.adapter';

export const ErrorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {
  const logger = inject(LoggerAdapter);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      logger.error('HTTP Error occurred:', error);
      return throwError(() => error);
    }),
  );
};
