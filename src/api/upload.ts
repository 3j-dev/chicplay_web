import FormData from 'form-data';

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

export const uploadVideoFile = async (videoSpaceId: string, videoFile: File) => {
  let videoFormData = new FormData();
  videoFormData.append('video', videoFile);
  videoFormData.append('videoInfo', videoFile.name);
  axiosInstance.post(
    apiRoutes.uploadVideoFile.replace('{video-space-id}', videoSpaceId),
    videoFormData,
    {
      headers: { 'Content-Type': 'multipart/form-data' },
    },
  );
};
