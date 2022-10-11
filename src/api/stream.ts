import FormData from 'form-data';

import { axiosInstance } from './instance';
import { apiRoutes } from './routes';

const postSnapshot = async (individualVideoId: string, formData: FormData) => {
  const { data } = await axiosInstance.post(
    apiRoutes.postImageSnapshot.replace('{individual-video-id}', individualVideoId),
    formData,
  );
  return data;
};

const getTextMemo = async (individualVideoId: string) => {
  const { data } = await axiosInstance.get(
    apiRoutes.getTextMemo.replace('{individual-video-id}', individualVideoId),
  );
  return data;
};

const updateTextMemo = async (individualVideoId: string, textMemo: string) => {
  await axiosInstance.post(
    apiRoutes.updateTextMemo.replace('{individual-video-id}', individualVideoId),
    textMemo,
  );
};

export { postSnapshot, getTextMemo, updateTextMemo };
