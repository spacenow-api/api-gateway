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
  }

  private register = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const resp = await this.api.post(request.path, request.body);
      response.send(resp.data);
    } catch (error) {
      next(error.response.data);
    }
  };

  private signin = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const resp = await this.api.post(request.path, request.body);
      response.send(resp.data);
    } catch (error) {
      next(error.response.data);
    }
  };
}

export default Authentication;
