import { MyDataT } from '@/interfaces/mypage';
import { axiosInstance } from './instance';
import { apiRoutes } from './routes';

export const getMyPageDashBoard = () => axiosInstance.get<MyDataT>(apiRoutes.getMyPageDashboard);
