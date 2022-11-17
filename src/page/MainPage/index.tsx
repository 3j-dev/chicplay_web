import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { Layout } from './style';
import Main from '@/component/Main';
import Footer from '@/component/Footer';
import { setAccessToken, setName, setPicture } from '@/util/auth';
import { LoginState } from '@/store/State/LoginState';
import { postWebexLoginCode } from '@/api/upload';

const MainPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const setLoginState = useSetRecoilState(LoginState);
  const navigate = useNavigate();
  const token = searchParams.get('token');
  const code = searchParams.get('code');
  const name = searchParams.get('name');
  const picture = searchParams.get('picture');

  useEffect(() => {
    if (token) {
      setAccessToken(token);
      if (picture) setPicture(picture);
      if (name) setName(name);
      navigate('');
      setLoginState((prev) => !prev);
    }
    if (code) {
      postWebexLoginCode(code);
      navigate('/upload');
    }
  }, [token, code, picture, name, navigate, setLoginState]);

  return (
    <Layout>
      <Main />
      <Footer />
    </Layout>
  );
};

export default MainPage;
