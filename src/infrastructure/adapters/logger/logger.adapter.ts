import { environment } from '@/environment';
import { Injectable } from '@angular/core';

export enum LogLevel {
  Debug = 'DEBUG',
  Info = 'INFO',
  Warn = 'WARN',
  Error = 'ERROR',
}

@Injectable({
  providedIn: 'root',
})
export class LoggerAdapter {
  debug(message: string, ...args: unknown[]): void {
    if (!environment.production) {
      console.debug(`[${LogLevel.Debug}]`, message, ...args);
    }
  }

  info(message: string, ...args: unknown[]): void {
    console.info(`[${LogLevel.Info}]`, message, ...args);
  }

  warn(message: string, ...args: unknown[]): void {
    console.warn(`[${LogLevel.Warn}]`, message, ...args);
  }

  error(message: string, error?: unknown): void {
    console.error(`[${LogLevel.Error}]`, message, error);
  }
}
