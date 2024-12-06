import { ErrorHandler, Injectable } from '@angular/core';
import { LoggerAdapter } from '../logger/logger.adapter';

@Injectable()
export class ErrorHandlerAdapter implements ErrorHandler {
  constructor(private logger: LoggerAdapter) {}

  handleError(error: Error): void {
    this.logger.error('An error occurred:', error);
  }
}
