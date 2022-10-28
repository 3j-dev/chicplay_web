import FormData from 'form-data';

import { axiosInstance } from './instance';
import { apiRoutes } from './routes';
import { IndivudalVideoInfoT, SnapshotInfoT, TextMemoT } from '@/interfaces/stream';

const getVideoInfo = async (individualVideoId: string) =>
  axiosInstance.get<IndivudalVideoInfoT>(
    apiRoutes.getVideoInfo.replace('{individual-video-id}', individualVideoId),
  );

const postSnapshot = async (individualVideoId: string, videoTime: number, formData: FormData) =>
  axiosInstance.post<SnapshotInfoT>(
    apiRoutes.postImageSnapshot
      .replace('{individual-video-id}', individualVideoId)
      .replace('{video-time}', `${videoTime}`),
    formData,
    {
      headers: { 'Content-Type': 'multipart/form-data' },
    },
  );

const getTextMemo = async (individualVideoId: string) =>
  axiosInstance.get<TextMemoT>(
    apiRoutes.getTextMemo.replace('{individual-video-id}', individualVideoId),
  );

const updateTextMemo = async (individualVideoId: string, memoData: object) => {
  const blob = new Blob([JSON.stringify(memoData)], { type: 'application/json' });

  return axiosInstance.post(
    apiRoutes.updateTextMemo.replace('{individual-video-id}', individualVideoId),
    blob,
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
};

const freshVideoAccessTime = async (individualVideoId: string) =>
  axiosInstance.put(
    apiRoutes.freshVideoAccessTime.replace('{individual-video-id}', individualVideoId),
  );

const getNoteList = async (individualVideoId: string) =>
  axiosInstance.get(apiRoutes.getNoteList.replace('{individual-video-id}', individualVideoId));

export {
  postSnapshot,
  getTextMemo,
  updateTextMemo,
  getVideoInfo,
  freshVideoAccessTime,
  getNoteList,
};
