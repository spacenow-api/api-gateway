import App from './App';
import Authentication from './services/authentication';
import Bookings from './services/bookings';
import Posts from './services/posts';
import Users from './services/users';
import Categories from './services/categories';

const app = new App(
  [
    new Authentication(),
    new Bookings(),
    new Posts(),
    new Users(),
    new Categories()
  ],
  4001,
  '0.0.0.0'
);

app.listen();
