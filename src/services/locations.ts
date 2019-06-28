import { Router, Request, Response, NextFunction } from 'express';
import { AxiosInstance } from 'axios';

import apiAdapter from '../helpers/adapter/apiAdapter';

const ENDPOINTS = ['/locations/:id'];

class Locations {
  private api: AxiosInstance;

  private router = Router();

  constructor(apiHost: string) {
    this.api = apiAdapter(apiHost);
    this.intializeRoutes();
  }

  private intializeRoutes() {
    ENDPOINTS.forEach(o => {
      this.router.get(o, (req: Request, res: Response, next: NextFunction) => {
        this.api
          .get(req.path)
          .then(result => res.send(result.data))
          .catch(err => next(err));
      });
    });
  }
}

export default Locations;
