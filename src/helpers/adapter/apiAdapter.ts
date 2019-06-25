import { Request } from 'express';
import axios, { AxiosInstance } from 'axios';

export default (baseURL: string, request?: Request): AxiosInstance =>
  axios.create({ baseURL: baseURL, withCredentials: true, headers: request ? request.headers : '' });
