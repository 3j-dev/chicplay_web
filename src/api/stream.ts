import FormData from 'form-data';

import { axiosInstance } from './instance';
import { apiRoutes } from './routes';
import { IndivudalVideoInfoT, SnapshotInfoT, TextMemoT } from '@/interfaces/stream';

const getVideoInfo = (individualVideoId: string) =>
  axiosInstance.get<IndivudalVideoInfoT>(
    apiRoutes.getVideoInfo.replace('{individual-video-id}', individualVideoId),
  );

const postSnapshot = (individualVideoId: string, videoTime: number, formData: FormData) =>
  axiosInstance.post<SnapshotInfoT>(
    apiRoutes.postImageSnapshot
      .replace('{individual-video-id}', individualVideoId)
      .replace('{video-time}', `${videoTime}`),
    formData,
    {
      headers: { 'Content-Type': 'multipart/form-data' },
    },
  );

const getTextMemo = (individualVideoId: string) =>
  axiosInstance.get<TextMemoT>(
    apiRoutes.getTextMemo.replace('{individual-video-id}', individualVideoId),
  );

const updateTextMemo = (individualVideoId: string, memoData: object) => {
  const blob = new Blob([JSON.stringify(memoData)], { type: 'application/json' });

  return axiosInstance.post(
    apiRoutes.updateTextMemo.replace('{individual-video-id}', individualVideoId),
    blob,
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
};

const reflectTextMemoInDB = (individualVideoId: string, memoData: object) => {
  const blob = new Blob([JSON.stringify(memoData)], { type: 'application/json' });

  return axiosInstance.post(
    apiRoutes.reflectTextMemoInDB.replace('{individual-video-id}', individualVideoId),
    blob,
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
};

const freshVideoAccessTime = (individualVideoId: string) =>
  axiosInstance.put(
    apiRoutes.freshVideoAccessTime.replace('{individual-video-id}', individualVideoId),
  );

const getNoteList = (individualVideoId: string) =>
  axiosInstance.get(apiRoutes.getNoteList.replace('{individual-video-id}', individualVideoId));

const freshProgressRate = (individualVideoId: string, percent: number) =>
  axiosInstance.put(
    apiRoutes.updateVideoProgressRate
      .replace('{individual-video-id}', individualVideoId)
      .replace('{percent}', `${percent}`),
  );

export {
  postSnapshot,
  getTextMemo,
  updateTextMemo,
  reflectTextMemoInDB,
  getVideoInfo,
  freshVideoAccessTime,
  getNoteList,
  freshProgressRate,
};
