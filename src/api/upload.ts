import { axiosInstance } from './instance';
import { apiRoutes } from './routes';

export const postWebexLoginCode = async (code: string) => {
  axiosInstance.post(apiRoutes.postWebexLoginCode.replace('{code}', code));
};

export const getWebexRecordingList = async () => {
  const data = axiosInstance.get(apiRoutes.getWebexRecordingList);
  return data;
};

export const postWebexRecording = async (videoSpaceId: string, recordingId: string) => {
  axiosInstance.post(
    apiRoutes.postWebexRecording
      .replace('{video-space-id}', videoSpaceId)
      .replace('{recording-id}', recordingId),
  );
};
