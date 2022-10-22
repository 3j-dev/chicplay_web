import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

import { LoginState } from '@/store/State/LoginState';
import { pushNotification } from '@/util/notification';
import Cookies from 'js-cookie';
import { refreshToken } from '@/api/user';

const useLogin = () => {
  const [loginState, setLoginState] = useRecoilState(LoginState);
  const login = (token: string) => {
    Cookies.set('access-token', token);
    setLoginState(true);
  };

  const logout = () => {
    Cookies.remove('access-token');
    setLoginState(false);
  };
};
