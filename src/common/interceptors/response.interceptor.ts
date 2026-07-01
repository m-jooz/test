import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import type { Response as ExpressResponse } from 'express';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  success: true;
  statusCode: number;
  data: T;
  timestamp: string;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const statusCode = context
      .switchToHttp()
      .getResponse<ExpressResponse>().statusCode;

    return next.handle().pipe(
      map((data: T) => ({
        success: true as const,
        statusCode,
        data,
        timestamp: new Date().toISOString(),
      })),
    );
  }
}
