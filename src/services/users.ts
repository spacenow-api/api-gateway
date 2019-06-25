import { Router, Request, Response, NextFunction } from 'express';
import { AxiosInstance } from 'axios';

import apiAdapter from '../helpers/adapter/apiAdapter';

class Users {
  private api: AxiosInstance;

  private base_url: string;

  private path = '/users';

  private router = Router();

  constructor(apiHost: string) {
    this.base_url = apiHost;
    this.api = apiAdapter(this.base_url);
    this.intializeRoutes();
  }

  private intializeRoutes() {
    this.router.get(this.path, this.getAllUsers);
    this.router.get(`${this.path}/:id`, this.getUser);
    this.router.post(`${this.path}`, this.createUser);
  }

  private getAllUsers = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const resp = await this.api.get(request.path);
      response.send(resp.data);
    } catch (error) {
      next(error.response.data);
    }
  };

  private getUser = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const resp = await this.api.get(request.path);
      response.send(resp.data);
    } catch (error) {
      next(error.response.data);
    }
  };

  private createUser = async (
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

export default Users;
