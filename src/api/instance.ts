import axios, { AxiosError, AxiosResponse } from 'axios';

import { authHeader } from '@/util/auth';
import { pushNotification } from '@/util/notification';
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
    if (error.response && error.response.status === 401) {
      try {
        const data = await refreshToken();
        if (data.accessToken !== undefined) setAccessToken(data.accessToken);
        else return;
      } catch (e: any) {
        console.log('error : ', e.response);
      }
      return Promise.reject(error);
    } else if (error.response && error.response.status === 500) {
      pushNotification('현재 서버에 문제가 발생하였습니다. 추후 다시 시도해주십시오', 'error');
    } else if (error.response && error.response.data.code === 'A03') {
      pushNotification('해당 유저를 찾을 수 없습니다.', 'error');
    } else if (error.response && error.response.data.code === 'VS03') {
      pushNotification('해당 유저는 이미 space 내에 있습니다.', 'error');
    } else if (error.response && error.response.data.code === 'E01') {
      pushNotification('Webex Login이 필요합니다.', 'error');
    } else pushNotification('에러가 발생했습니다.', 'error');

    return Promise.reject(error);
  },
);

export const axiosInstance = instance;
