import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

import { Layout } from './style';
import Main from '@/component/Main';
import Footer from '@/component/Footer';
import { postWebexLoginCode } from '@/api/upload';
import { useAuthenticationContext } from '@/hook/AuthenticationContext';

const MainPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { login } = useAuthenticationContext();
  const navigate = useNavigate();
  const token = searchParams.get('token');
  const code = searchParams.get('code');
  const name = searchParams.get('name');
  const picture = searchParams.get('picture');

  useEffect(() => {
    if (token) {
      const payload = {
        token: token,
        name: name || '',
        picture: picture || '',
      };
      login(payload, navigate);
    }
    if (code) {
      postWebexLoginCode(code);
      navigate('/upload');
    }
  }, [token, code, picture, name, navigate, login]);

  return (
    <Layout>
      <Main />
      <Footer />
    </Layout>
  );
};

export default MainPage;
