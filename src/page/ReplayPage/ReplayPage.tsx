import { useState } from 'react';

import { Layout } from './style';
import VideoStream from '@/component/VideoStream';
import VideoStreamNote from '@/component/VideoStreamNote/VideoStreamNote';

const ReplayPage: React.FC = () => {
  const [snapShotClicked, setSnapShotClicked] = useState<boolean>(false);

  return (
    <Layout>
      <VideoStream snapShotClicked={snapShotClicked} setSnapShotClicked={setSnapShotClicked} />
      <VideoStreamNote setSnapShotClicked={setSnapShotClicked} />
    </Layout>
  );
};

export default ReplayPage;
