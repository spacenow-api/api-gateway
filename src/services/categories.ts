import { Router, Request, Response, NextFunction } from 'express';
import apiAdapter from '../helpers/adapter/apiAdapter';

class Categories {
  public base_url = 'http://localhost:3003';
  public api = apiAdapter(this.base_url);
  public path = '/categories';
  public router = Router();

  constructor() {
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
