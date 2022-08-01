import { Layout } from './style';
import VideoStream from '@/component/VideoStream';
// import VideoStreamNote from '@/component/VideoStreamNote/VideoStreamNote';

const ReplayPage: React.FC = () => {
  return (
    <Layout>
      <VideoStream />
      {/* <VideoStreamNote /> */}
    </Layout>
  );
};

export default ReplayPage;
