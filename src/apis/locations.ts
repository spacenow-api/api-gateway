import { Router, Request, Response, NextFunction } from 'express';
import { AxiosInstance } from 'axios';

import apiAdapter from '../helpers/adapter/apiAdapter';

const GET_ENDPOINTS = ['/locations/:id'];

const POST_ENDPOINTS = ['/locations'];

class Locations {
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
          .catch(err => res.status(400).send(err.response.data.message));
      });
    });
  }
}

export default Locations;
