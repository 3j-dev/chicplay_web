import { axiosInstance } from './instance';
import { apiRoutes } from './routes';

type TokenT = { accessToken: string };

const refreshToken = async () => {
  const data = axiosInstance.get<TokenT>(apiRoutes.refreshToken);
  return data;
};

const logout = async () => {
  axiosInstance.post(apiRoutes.logout);
};

export { refreshToken, logout };
