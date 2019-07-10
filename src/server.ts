import * as config from "./config";

import App from "./App";

import Authentication from "./apis/authentication";
import Bookings from "./apis/bookings";
import Spaces from "./apis/spaces";
import Users from "./apis/users";
import Categories from "./apis/categories";
import Locations from "./apis/locations";
import Availabilities from "./apis/availabilities";

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
  "0.0.0.0"
);

app.listen();
