import axios, { AxiosInstance } from 'axios';

export default (baseURL:string, headers?:string):AxiosInstance => {
  return (
    axios.create({baseURL: baseURL, headers: headers})
  )
};