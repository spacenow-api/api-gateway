import { Router, Request, Response, NextFunction } from 'express';
import { AxiosInstance } from 'axios';

import apiAdapter from '../helpers/adapter/apiAdapter';

class Spaces {
  private api: AxiosInstance;

  private router = Router();

  constructor(apiHost: string) {
    this.api = apiAdapter(apiHost);
    this.intializeRoutes();
  }

  private intializeRoutes() {
    this.router.get(
      `/listings/:id`,
      (req: Request, res: Response, next: NextFunction) => {
        this.api
          .get(req.path)
          .then(result => res.send(result.data))
          .catch(err => next(err));
      }
    );
  }
}

export default Spaces;
