import { Router, Request, Response, NextFunction } from 'express';
import apiAdapter from '../helpers/adapter/apiAdapter';
 
class PostsController {

  public base_url = 'http://localhost:3002'
  public api = apiAdapter(this.base_url);
  public path = '/posts';
  public router = Router();
  
  constructor() {
    this.intializeRoutes();
  }
 
  private intializeRoutes() {
    this.router.get(`${this.path}`, this.getAllPosts);
  }
 
  private getAllPosts = async (request: Request, response: Response, next:NextFunction) => {
    try {
      const resp = await this.api.get(request.path)
      response.send(resp.data);
    } catch (error) {
      next(error.response.data);
    }
    
  }

}
 
export default PostsController;