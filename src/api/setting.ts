import { LectureSpaceT, SpaceSimpleT, UserPlusT } from '@/interfaces/setting';
import { axiosInstance } from './instance';
import { apiRoutes } from './routes';

export const plusUserInVideoSpace = async (videoSpaceId: number, userEmail: string) =>
  axiosInstance.post<UserPlusT>(
    apiRoutes.plusUserInVideoSpace
      .replace('{video-space-id}', `${videoSpaceId}`)
      .replace('{user-email}', userEmail),
  );

export const plusVideoSpace = (name: string, description: string) =>
  axiosInstance.post<SpaceSimpleT>(apiRoutes.createVideoSpace, {
    name: name,
    description: description,
  });

export const getHostedVideoList = () =>
  axiosInstance.get<LectureSpaceT[]>(apiRoutes.getHostVideoSpaceList);

export const deleteVideoSpace = (videoSpaceId: number) =>
  axiosInstance.delete(apiRoutes.deleteVideoSpace.replace('{video-space-id}', `${videoSpaceId}`));
