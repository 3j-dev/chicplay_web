import { axiosInstance } from './instance';
import { apiRoutes } from './routes';

type TokenT = { accessToken: string };

const refreshToken = () => axiosInstance.get<TokenT>(apiRoutes.refreshToken);

const logout = () => axiosInstance.post(apiRoutes.logout);

export { refreshToken, logout };
