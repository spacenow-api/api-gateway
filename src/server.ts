import {
  PORT,
  BOOKINGS_API_HOST,
  ASSETS_API_HOST,
  CATEGORIES_API_HOST,
  SPACES_API_HOST,
  USERS_AUTHENTICATION_API_HOST,
  LOCATIONS_API_HOST
} from "./config";

import App from "./App";

import Assets from "./apis/assets";
import Authentication from "./apis/authentication";
import Bookings from "./apis/bookings";
import Spaces from "./apis/spaces";
import Users from "./apis/users";
import Categories from "./apis/categories";
import Locations from "./apis/locations";

const app = new App(
  [
    new Assets(ASSETS_API_HOST),
    new Authentication(USERS_AUTHENTICATION_API_HOST),
    new Users(USERS_AUTHENTICATION_API_HOST),
    new Spaces(SPACES_API_HOST),
    new Categories(CATEGORIES_API_HOST),
    new Bookings(BOOKINGS_API_HOST),
    new Locations(LOCATIONS_API_HOST)
  ],
  PORT,
  "0.0.0.0"
);

app.listen();
