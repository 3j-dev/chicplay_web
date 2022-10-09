import axios from 'axios';

import { authHeader } from '@/util/auth';

const baseURL: string = 'https://api.dev.edu-vivid.com';

const instance = axios.create({ baseURL });
instance.interceptors.request.use((config) => {
  const newConfig = { ...config };
  newConfig.withCredentials = true;
  if (newConfig.headers) newConfig.headers.Authorization = authHeader();
  return newConfig;
});

export const axiosInstance = instance;
