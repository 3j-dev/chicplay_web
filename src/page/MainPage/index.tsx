import { Layout } from './style';
import Hello from '@/component/Hello';
import Header from '@/component/Header';

const MainPage: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Hello />
    </Layout>
  );
};

export default MainPage;
