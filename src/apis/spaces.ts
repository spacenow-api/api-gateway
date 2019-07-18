import { Router, Request, Response, NextFunction } from 'express';
import { AxiosInstance } from 'axios';

import apiAdapter from '../helpers/adapter/apiAdapter';

const GET_ENDPOINTS = [
  '/listings/:id',
  '/listings/data/:listingId',
  '/listings/settings/:listingId',
  '/listings/amenities/:listingId',
  '/listings/rules/:listingId',
  '/listings/access/:listingId'
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
          .get(req.path, { headers: req.headers })
          .then(result => res.send(result.data))
          .catch(err => res.status(400).send(err.response.data.message));
      });
    });
    POST_ENDPOINTS.forEach(o => {
      this.router.post(o, (req: Request, res: Response, next: NextFunction) => {
        this.api
          .post(req.path, req.body, { headers: req.headers })
          .then(result => res.send(result.data))
          .catch(err => res.status(400).send(err.response.data.message));
      });
    });
    PUT_ENDPOINTS.forEach(o => {
      this.router.put(o, (req: Request, res: Response, next: NextFunction) => {
        this.api
          .put(req.path, req.body, { headers: req.headers })
          .then(result => res.send(result.data))
          .catch(err => res.status(400).send(err.response.data.message));
      });
    });
  }
}

export default Spaces;
