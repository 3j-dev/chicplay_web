import { axiosInstance } from './instance';
import { apiRoutes } from './routes';

type TokenT = { accessToken: string };

const refreshToken = async () => {
  const { accessToken } = axiosInstance.get<TokenT>(apiRoutes.refreshToken);
  return accessToken;
};

export { refreshToken };
