import { NextFunction, Response, Request } from 'express';
async function requestMiddleware(request: Request, response: Response, next: NextFunction) {
  response.setHeader('Authorization', request.headers.authorization || '')
  next();
}
 
export default requestMiddleware;