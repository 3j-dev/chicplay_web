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

const updateTextMemo = async (individualVideoId: string, textMemo: string) =>
  axiosInstance.post(
    apiRoutes.updateTextMemo.replace('{individual-video-id}', individualVideoId),
    textMemo,
  );

const freshVideoAccessTime = async (individualVideoId: string) =>
  axiosInstance.put(
    apiRoutes.freshVideoAccessTime.replace('{individual-video-id}', individualVideoId),
  );

export { postSnapshot, getTextMemo, updateTextMemo, getVideoInfo, freshVideoAccessTime };
