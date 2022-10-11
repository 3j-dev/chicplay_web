import { axiosInstance } from './instance';
import { apiRoutes } from './routes';

type TokenT = { accessToken: string };

const refreshToken = async () => {
  const { accessToken } = axiosInstance.get<TokenT>(apiRoutes.refreshToken);
  return accessToken;
};

const logout = async () => {
  axiosInstance.post(apiRoutes.logout);
};

export { refreshToken, logout };
