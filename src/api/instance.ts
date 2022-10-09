import axios, { AxiosError, AxiosResponse } from 'axios';

import { authHeader } from '@/util/auth';
import { refreshToken } from './user';
import { setAccessToken } from '@/util/auth';

const baseURL: string = 'https://api.dev.edu-vivid.com';

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: authHeader(),
    withCredentials: true,
  },
});

instance.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  async (error: AxiosError) => {
    try {
      if (error.response === undefined) {
        throw Error;
      }
      const errResponseStatus = error.response.status;

      if (errResponseStatus === 401) {
        const accessToken = await refreshToken();
        setAccessToken(accessToken);
      }
    } catch (e) {
      return Promise.reject(e);
    }
  },
);

export const axiosInstance = instance;
