import { apiRoutes } from './routes';
import { axiosInstance } from './instance';

export const getVideoList = () => axiosInstance.get(apiRoutes.getVideoSpaceList);
