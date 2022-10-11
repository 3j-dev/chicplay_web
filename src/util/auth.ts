import Cookies from 'js-cookie';

type TokenHeaderT = string;

const setAccessToken = (token: string) => {
  Cookies.set('access-token', token);
};

const authHeader = (): TokenHeaderT => {
  const accessToken = Cookies.get('access-token') || '';

  if (accessToken) return `Bearer ${accessToken}`;
  else return '';
};

export { setAccessToken, authHeader };
