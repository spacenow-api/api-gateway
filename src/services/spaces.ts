import { Router, Request, Response, NextFunction } from 'express';
import { AxiosInstance } from 'axios';

import apiAdapter from '../helpers/adapter/apiAdapter';

class Spaces {
  private api: AxiosInstance;

  private base_url: string;

  private path = '/listing';

  private router = Router();

  constructor(apiHost: string) {
    this.base_url = apiHost;
    this.api = apiAdapter(this.base_url);
    this.intializeRoutes();
  }

  private intializeRoutes() {
    this.router.get(`${this.path}`, this.getAllPosts);
  }

  private getAllPosts = async (
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
}

export default Spaces;
