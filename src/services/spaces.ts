import { Router, Request, Response, NextFunction } from 'express';
import { AxiosInstance } from 'axios';

import apiAdapter from '../helpers/adapter/apiAdapter';

const GET_ENDPOINTS = [
  '/listings/:id',
  '/listings/data/:listingId',
  '/listings/settings/:listingId'
];

const POST_ENDPOINTS = ['/listings/draft'];

const PUT_ENDPOINTS = ['/listings/update'];

class Spaces {
  private api: AxiosInstance;

  private router = Router();

  constructor(apiHost: string) {
    this.api = apiAdapter(apiHost);
    this.intializeRoutes();
  }

  private intializeRoutes() {
    GET_ENDPOINTS.forEach(o => {
      this.router.get(o, (req: Request, res: Response, next: NextFunction) => {
        this.api
          .get(req.path)
          .then(result => res.send(result.data))
          .catch(err => next(err));
      });
    });
    POST_ENDPOINTS.forEach(o => {
      this.router.post(o, (req: Request, res: Response, next: NextFunction) => {
        this.api
          .post(req.path, req.body)
          .then(result => res.send(result.data))
          .catch(err => next(err));
      });
    });
    PUT_ENDPOINTS.forEach(o => {
      this.router.put(o, (req: Request, res: Response, next: NextFunction) => {
        this.api
          .put(req.path, req.body)
          .then(result => res.send(result.data))
          .catch(err => next(err));
      });
    });
  }
}

export default Spaces;
