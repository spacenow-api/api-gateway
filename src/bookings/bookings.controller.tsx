import { Router, Request, Response, NextFunction } from 'express';
import apiAdapter from '../helpers/adapter/apiAdapter';
 
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
    this.router.get(`${this.path}/:id`, this.getBooking);
  }
 
  private getAllBookings = async (req: Request, res: Response, next:NextFunction) => {
    try {
      const resp = await this.api.get(req.path);
      res.send(resp.data);
    } catch (error) {
      next(error.response.data);
    }
  }

  private getBooking = async (req: Request, res: Response, next:NextFunction) => {
    try {
      const resp = await this.api.get(req.path);
      res.send(resp.data);
    } catch (error) {
      next(error.response.data);
    }
  }

}
 
export default BookingsController;