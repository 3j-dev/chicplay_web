import { apiRoutes } from './routes';
import { axiosInstance } from './instance';

export const getVideoList = async () => {
  const data = await axiosInstance.get(apiRoutes.getVideoSpaceList);
  return data;
};
