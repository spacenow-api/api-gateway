import { Router, Request, Response, NextFunction } from 'express';
import apiAdapter from '../helpers/adapter/apiAdapter';

class Users {
  public base_url = 'http://localhost:3001';
  public path = '/users';
  public api = apiAdapter(this.base_url);
  public router = Router();

  constructor() {
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
