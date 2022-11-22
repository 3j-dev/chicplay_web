import Cookies from 'js-cookie';

type TokenHeaderT = string;

const setAccessToken = (token: string) => {
  Cookies.set('access-token', token);
};

const getAccessToken = () => Cookies.get('access-token') || '';

const setName = (name: string) => {
  if (name.length > 1) Cookies.set('name', name);
};

const setPicture = (picture: string) => {
  if (picture.length > 1) Cookies.set('picture', picture);
};

const getName = () => Cookies.get('name') || '';

const getPictureURL = () => Cookies.get('picture') || '';

const deleteToken = () => {
  Cookies.remove('access-token');
  Cookies.remove('vivid-at');
  Cookies.remove('name');
  Cookies.remove('picture');
};

const authHeader = (): TokenHeaderT => {
  const accessToken = Cookies.get('access-token') || '';

  if (accessToken) return `Bearer ${accessToken}`;
  else return '';
};

export {
  setAccessToken,
  getAccessToken,
  authHeader,
  deleteToken,
  setName,
  setPicture,
  getName,
  getPictureURL,
};
