import { Router, Request, Response, NextFunction } from 'express';
import apiAdapter from '../helpers/adapter/apiAdapter';
import authMiddleware from "../helpers/middlewares/auth-middleware";
import RequestWithUser from "../helpers/interfaces/requestWithUser.inteface";
 
class BookingsController {

  public base_url = 'https://api-bookings.sandpit.cloud.spacenow.com/'
  public api = apiAdapter(this.base_url);
  public path = '/bookings';
  public router = Router();
  
  constructor() {
    this.intializeRoutes();
  }
 
  private intializeRoutes() {
    this.router.get(`${this.path}`, this.getAllBookings);
  }
 
  private getAllBookings = async (req: RequestWithUser, res: Response, next:NextFunction) => {
    try {
      const options = { headers: req.cookies }
      const resp = await this.api.get(req.path, options)
      res.send(resp.data);
    } catch (error) {
      next(error.response.data);
    }
    
  }

}
 
export default BookingsController;