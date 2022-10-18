import { axiosInstance } from './instance';
import { apiRoutes } from './routes';

export const getMyPageDashBoard = async () => {
  const data = await axiosInstance.get(apiRoutes.getMyPageDashboard);
  return data;
};
