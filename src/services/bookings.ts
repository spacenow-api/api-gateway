import { Router, Request, Response, NextFunction } from 'express';
import apiAdapter from '../helpers/adapter/apiAdapter';

class Bookings {
  public base_url = 'https://api-bookings.sandpit.cloud.spacenow.com';
  public path = '/bookings';
  public api = apiAdapter(this.base_url);
  public router = Router();

  constructor() {
    this.intializeRoutes();
  }

  private intializeRoutes() {
    this.router.get(this.path, this.getAllBookings);
    this.router.get(`${this.path}/:id`, this.getBooking);
  }

  private getAllBookings = async (
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

  private getBooking = async (
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

export default Bookings;
