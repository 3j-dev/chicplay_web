import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

import { Layout } from './style';
import Main from '@/component/Main';
import Header from '@/component/Header';
import Footer from '@/component/Footer';
import { setAccessToken } from '@/util/auth';

const MainPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token');

  useEffect(() => {
    if (token) {
      setAccessToken(token);
      navigate('');
    }
  }, [token, navigate]);

  return (
    <Layout>
      <Header />
      <Main />
      <Footer />
    </Layout>
  );
};

export default MainPage;
