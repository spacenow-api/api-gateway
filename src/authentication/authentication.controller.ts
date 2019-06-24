import { Router, Request, Response, NextFunction } from 'express';
import apiAdapter from '../helpers/adapter/apiAdapter';
 
class AuthenticationController {

  public base_url = 'http://localhost:3001'
  public path = '/auth';
  public api = apiAdapter(this.base_url);
  public router = Router();
  
  constructor() {
    this.intializeRoutes();
  }
 
  private intializeRoutes() {
    this.router.post(`${this.path}/register`, this.register);
    this.router.post(`${this.path}/signin`, this.signin);
  }

  private register = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const resp = await this.api.post(request.path, request.body)
      response.send(resp.data);
    } catch (error) {
      next(error.response.data)
    }
  }

  private signin = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const resp = await this.api.post(request.path, request.body)
      response.send(resp.data);
    } catch (error) {
      next(error.response.data)
    }
  }

}
 
export default AuthenticationController;