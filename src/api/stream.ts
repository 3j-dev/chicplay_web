import FormData from 'form-data';
import Cookies from 'js-cookie';
import axios from 'axios';

import { apiRoutes } from './routes';

const postSnapshot = async (individualVideoId: string, formData: FormData) => {
  const { data } = await axios.post(
    process.env.BASE_API_URL +
      apiRoutes.postImageSnapshot.replace('{individual-video-id}', individualVideoId),
    formData,
    {
      headers: {
        token: Cookies.get('token') || '',
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  console.log(process.env.API_BASE_URL);
  return data;
};

const getTextMemo = async (individualVideoId: string): Promise<object> => {
  const { data } = await axios.get(
    process.env.BASE_API_URL +
      apiRoutes.getTextMemo.replace('{individual-video-id}', individualVideoId),
    {
      headers: {
        token: Cookies.get('token') || '',
      },
    },
  );
  return data;
};

const updateTextMemo = async (individualVideoId: string, textMemo: string): Promise<void> => {
  await axios.post(
    process.env.BASE_API_URL +
      apiRoutes.updateTextMemo.replace('{individual-video-id}', individualVideoId),
    textMemo,
    {
      headers: {
        token: Cookies.get('token') || '',
      },
    },
  );
};

export { postSnapshot, getTextMemo, updateTextMemo };
