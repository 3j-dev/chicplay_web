import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { Layout } from './style';
import Main from '@/component/Main';
import Header from '@/component/Header';
import Footer from '@/component/Footer';
import { setAccessToken } from '@/util/auth';
import { LoginState } from '@/store/State/LoginState';

const MainPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const setLoginState = useSetRecoilState(LoginState);
  const navigate = useNavigate();
  const token = searchParams.get('token');

  useEffect(() => {
    if (token) {
      setAccessToken(token);
      navigate('');
      setLoginState((prev) => !prev);
    }
  }, [token, navigate, setLoginState]);

  return (
    <Layout>
      <Header />
      <Main />
      <Footer />
    </Layout>
  );
};

export default MainPage;
