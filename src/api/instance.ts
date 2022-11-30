import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios, { AxiosError } from 'axios';

import { authHeader, setAccessToken } from '@/util/TokenStorage';
import { refreshToken } from './user';

type RetryConfig = { remainingRetry?: number };
type RequestWithRetry = AxiosRequestConfig & RetryConfig;
type ErrorWithRetry = AxiosError & { config: RequestWithRetry };

const RETRY_COUNT = 3;
const TIMEOUT = 2000;

export const axiosInstance = axios.create({
  baseURL: 'https://api.dev.edu-vivid.com',
  validateStatus: (status: number) => status !== 401,
});

const onFulfilled = (response: AxiosResponse): AxiosResponse => response;

const onRejected = async (error: ErrorWithRetry): Promise<AxiosResponse> => {
  if (!error.config.remainingRetry) error.config.remainingRetry = RETRY_COUNT;
  if (error.config.remainingRetry < 0) return Promise.reject(error);

  error.config.remainingRetry = error.config.remainingRetry - 1;

  const { status, data } = await refreshToken();
  if (status === 401) return Promise.reject(error);

  setAccessToken(data.accessToken);
  return axiosInstance.request(error.config);
};

axiosInstance.interceptors.request.use((request: RequestWithRetry) => ({
  timeout: TIMEOUT,
  ...request,
  headers: {
    ...request.headers,
    Authorization: `${authHeader()}`,
  },
}));

axiosInstance.interceptors.response.use(onFulfilled, onRejected);
