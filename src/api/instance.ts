import axios, { AxiosError, AxiosResponse } from 'axios';
import { useRecoilValue } from 'recoil';

import { authHeader } from '@/util/auth';
import { refreshToken } from './user';
import { setAccessToken } from '@/util/auth';
import { LoginState } from '@/store/State/LoginState';

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
        throw Error('undefined');
      }
      const errResponseStatus = error.response.status;
      const loginState = useRecoilValue(LoginState);

      if (errResponseStatus === 401 && loginState) {
        const accessToken = await refreshToken();
        setAccessToken(accessToken);
      }
    } catch (e) {
      return Promise.reject(e);
    }
  },
);

export const axiosInstance = instance;
