import { Router, Request, Response, NextFunction } from 'express';
import { AxiosInstance } from 'axios';

import apiAdapter from '../helpers/adapter/apiAdapter';

class Availabilities {
  private api: AxiosInstance;

  private router = Router();

  constructor(apiHost: string) {
    this.api = apiAdapter(apiHost);
    this.intializeRoutes();
  }

  private intializeRoutes() {
    this.router.get('/availabilities/:id', (req: Request, res: Response, next: NextFunction) => {
      this.api
        .get(`/getByListing/${req.params.id}`)
        .then(result => res.send(result.data))
        .catch(err => next(err));
    });
  }
}

export default Availabilities;
