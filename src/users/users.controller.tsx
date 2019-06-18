import { Router, Request, Response, NextFunction } from 'express';
import apiAdapter from '../helpers/adapter/apiAdapter';
 
class UsersController {

  public base_url = 'http://localhost:4001'
  public path = '/users';
  public api = apiAdapter(this.base_url);
  public router = Router();
  
  constructor() {
    this.intializeRoutes();
  }
 
  private intializeRoutes() {
    this.router.get(this.path, this.getAllUsers);
    // this.router.post(this.path, this.createUser);
    // this.router.patch(this.path, this.createUser);
  }
 
  private getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const resp = await this.api.get(req.path);
      res.send(resp.data);
    } catch (error) {
      next(error.response.data)
    }
  }

}
 
export default UsersController;