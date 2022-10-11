import axios, { AxiosError, AxiosResponse } from 'axios';

import { authHeader } from '@/util/auth';
import { pushNotification } from '@/util/notification';
// import { refreshToken } from './user';
// import { setAccessToken } from '@/util/auth';

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
    if (error.response && error.response.status === 401) {
      try {
        // const newAccessToken = await refreshToken();
        // setAccessToken(newAccessToken);
        pushNotification('로그인이 필요한 서비스입니다.', 'error');
        // eslint-disable-next-line @typescript-eslint/no-implied-eval
        setTimeout((window.location.href = '/'), 2000);
      } catch (e: any) {
        console.log('error : ', e.response);
      }
      return Promise.reject(error);
    }
    return Promise.reject(error);
  },
);

export const axiosInstance = instance;
