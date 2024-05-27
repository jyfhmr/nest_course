import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response} from "express"
@Injectable()
export class TasksMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {

    console.log("from the middleware",req.originalUrl)

    next();
  }
}
