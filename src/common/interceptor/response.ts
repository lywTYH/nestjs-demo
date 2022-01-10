import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { Response } from 'express';

interface CountResult {
  count: number;
  data: any[];
}

function isCountResult(res: any): res is CountResult {
  return (
    res.data !== undefined &&
    res.count !== undefined &&
    typeof res.count === 'number' &&
    Array.isArray(res.data)
  );
}

@Injectable()
export class CountInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ResponseObj: Response = context.switchToHttp().getResponse();
    return next.handle().pipe(
      map((res) => {
        if (isCountResult(res)) {
          const { count, data } = res;
          ResponseObj.setHeader('X-Total-Count', count);
          return data;
        }
        return res;
      }),
    );
  }
}
