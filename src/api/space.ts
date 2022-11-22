import { apiRoutes } from './routes';
import { axiosInstance } from './instance';
import { LectureStreamSpaceT } from '@/interfaces/space';

export const getVideoList = () =>
  axiosInstance.get<LectureStreamSpaceT[]>(apiRoutes.getVideoSpaceList);
