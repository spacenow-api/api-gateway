
import axios, { AxiosInstance } from 'axios';

export default (baseURL:string):AxiosInstance => axios.create({baseURL: baseURL, withCredentials: true});