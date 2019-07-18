import { Router, Request, Response, NextFunction } from 'express';
import { AxiosInstance } from 'axios';

import apiAdapter from '../helpers/adapter/apiAdapter';

const GET_ENDPOINTS = ['/categories/legacy'];

class Categories {
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
  }
}

export default Categories;
