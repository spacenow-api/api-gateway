import { Router, Request, Response, NextFunction } from 'express';
import { AxiosInstance } from 'axios';

import apiAdapter from '../helpers/adapter/apiAdapter';

class Categories {
  private api: AxiosInstance;

  private base_url: string;

  private path = '/categories';

  private router = Router();

  constructor(apiHost: string) {
    this.base_url = apiHost;
    this.api = apiAdapter(this.base_url);
    this.intializeRoutes();
  }

  private intializeRoutes() {
    this.router.get(`${this.path}`, this.getRootCategories);
    this.router.get(`${this.path}/:id`, this.getCategory);
    this.router.post(`${this.path}`, this.createCategory);
    this.router.patch(`${this.path}`, this.createCategory);
  }

  private getRootCategories = async (
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

  private getCategory = async (
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

  private createCategory = async (
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

export default Categories;
