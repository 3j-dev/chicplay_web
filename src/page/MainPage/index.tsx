import { Layout } from './style';
import Main from '@/component/Main';
import Header from '@/component/Header';
import Footer from '@/component/Footer';

const MainPage: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Main />
      <Footer />
    </Layout>
  );
};

export default MainPage;
