import { Router, Request, Response, NextFunction } from 'express';
import { AxiosInstance } from 'axios';

import apiAdapter from '../helpers/adapter/apiAdapter';

class Authentication {

  private api: AxiosInstance;

  private base_url: string;

  private path = '/auth';

  private router = Router();

  constructor(apiHost: string) {
    this.base_url = apiHost;
    this.api = apiAdapter(this.base_url);
    this.intializeRoutes();
  }

  private intializeRoutes() {
    this.router.post(`${this.path}/register`, this.register);
    this.router.post(`${this.path}/signin`, this.signin);
    this.router.post(`${this.path}/token/validate`, this.tokenValidate);
  }

  private register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const resp = await this.api.post(req.path, req.body);
      res.send(resp.data);
    } catch (err) {
      next(err.response.data);
    }
  };

  private signin = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const resp = await this.api.post(req.path, req.body);
      res.send(resp.data);
    } catch (err) {
      next(err.response.data);
    }
  };

  private tokenValidate = async (req: Request, res: Response, next: NextFunction) => {
    this.api
      .post(req.path, req.body)
      .then(result => res.send(result.data))
      .catch(err => res.status(400).send(err.response.data.message));
  }
}

export default Authentication;
