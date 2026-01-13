import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const hasQueryParams = Object.keys(req.query ?? {}).length > 0;
    const hasBody = Object.keys(req.body ?? {}).length > 0;

    console.log(
      `${req.method} ${req.originalUrl} ${hasQueryParams ? JSON.stringify(req.query) : ''}`,
    );
    if (hasBody) {
      console.log('Body:', JSON.stringify(req.body));
    }
    next();
  }
}
