import * as dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000;

export const BOOKINGS_API_HOST =
  process.env.BOOKINGS_API_HOST || 'http://localhost:6004';

export const CATEGORIES_API_HOST =
  process.env.CATEGORIES_API_HOST || 'http://localhost:6003';

export const SPACES_API_HOST =
  process.env.SPACES_API_HOST || 'http://localhost:6002';

export const USERS_AUTHENTICATION_API_HOST =
  process.env.USERS_API_HOST || 'http://localhost:6001';
