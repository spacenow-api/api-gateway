import {
  PORT,
  BOOKINGS_API_HOST,
  CATEGORIES_API_HOST,
  SPACES_API_HOST,
  USERS_AUTHENTICATION_API_HOST,
  LOCATIONS_API_HOST
} from './config';

import App from './App';

import Authentication from './services/authentication';
import Bookings from './services/bookings';
import Spaces from './services/spaces';
import Users from './services/users';
import Categories from './services/categories';
import Locations from './services/locations';

const app = new App(
  [
    new Authentication(USERS_AUTHENTICATION_API_HOST),
    new Users(USERS_AUTHENTICATION_API_HOST),
    new Spaces(SPACES_API_HOST),
    new Categories(CATEGORIES_API_HOST),
    new Bookings(BOOKINGS_API_HOST),
    new Locations(LOCATIONS_API_HOST)
  ],
  PORT,
  '0.0.0.0'
);

app.listen();
