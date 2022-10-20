import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { Layout } from './style';
import Main from '@/component/Main';
import Footer from '@/component/Footer';
import { setAccessToken } from '@/util/auth';
import { LoginState } from '@/store/State/LoginState';
import { postWebexLoginCode } from '@/api/upload';

const MainPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const setLoginState = useSetRecoilState(LoginState);
  const navigate = useNavigate();
  const token = searchParams.get('token');
  const code = searchParams.get('code');

  useEffect(() => {
    if (token) {
      setAccessToken(token);
      navigate('');
      setLoginState((prev) => !prev);
    }
    if (code) {
      postWebexLoginCode(code);
      navigate('/upload');
    }
  }, [token, code, navigate, setLoginState]);

  return (
    <Layout>
      <Main />
      <Footer />
    </Layout>
  );
};

export default MainPage;
