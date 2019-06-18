import { Router, Request, Response, NextFunction } from 'express';
import apiAdapter from '../helpers/adapter/apiAdapter';

import TokenController from '../token/token.controller';
import CookieController from '../cookie/cookie.controller';
 
class AuthenticationController {

  public base_url = 'http://localhost:4001'
  public path = '/auth';
  public api = apiAdapter(this.base_url);
  public router = Router();
  
  constructor() {
    this.intializeRoutes();
  }
 
  private intializeRoutes() {
    this.router.post(`${this.path}/register`, this.register);
    this.router.post(`${this.path}/signin`, this.login);
    this.router.post(`${this.path}/logout`, this.logout);
  }

  private register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const resp = await this.api.post(req.path, req.body)
      res.send(resp.data);
    } catch (error) {
      next(error.response.data)
    }
  }

  private login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const resp = await this.api.post(req.path, req.body)
      const tokenData = new TokenController().createToken(resp.data)
      res.setHeader('Set-Cookie', [new CookieController().createCookie(tokenData)]);
      res.send(resp.data);
    } catch (error) {
      next(error.response.data)
    }
  }

  private logout = async (req: Request, res: Response) => {
    const resp = await this.api.post(req.path, req.body)
    res.setHeader('Set-Cookie', ['Authorization=;Max-age=0']);
    res.send(resp.data);
  }

}
 
export default AuthenticationController;