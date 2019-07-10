import * as config from './config';

import App from './App';

import Authentication from './services/authentication';
import Bookings from './services/bookings';
import Spaces from './services/spaces';
import Users from './services/users';
import Categories from './services/categories';
import Locations from './services/locations';
import Availabilities from './services/availabilities';

const app = new App(
  [
    new Authentication(config.USERS_AUTHENTICATION_API_HOST),
    new Users(config.USERS_AUTHENTICATION_API_HOST),
    new Spaces(config.SPACES_API_HOST),
    new Categories(config.CATEGORIES_API_HOST),
    new Bookings(config.BOOKINGS_API_HOST),
    new Locations(config.LOCATIONS_API_HOST),
    new Availabilities(config.AVAILABILITIES_API_HOST)
  ],
  config.PORT,
  '0.0.0.0'
);

app.listen();
