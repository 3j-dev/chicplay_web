import { axiosInstance } from './instance';
import { apiRoutes } from './routes';

export const plusUserInVideoSpace = async (videoSpaceId: number, userEmail: string) => {
  const data = await axiosInstance.post(
    apiRoutes.plusUserInVideoSpace
      .replace('{video-space-id}', `${videoSpaceId}`)
      .replace('{user-email}', userEmail),
  );
  return data;
};
