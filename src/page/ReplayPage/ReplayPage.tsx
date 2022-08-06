import { useState } from 'react';

import { Layout } from './style';
import VideoStream from '@/component/VideoStream';
import VideoStreamNote from '@/component/VideoStreamNote/VideoStreamNote';

const ReplayPage: React.FC = () => {
  const [snapShotClicked, setSnapShotClicked] = useState<boolean>(false);
  const [snapShotURL, setSnapShotURL] = useState<string>('');

  return (
    <Layout>
      <VideoStream
        snapShotClicked={snapShotClicked}
        setSnapShotClicked={setSnapShotClicked}
        setSnapShotURL={setSnapShotURL}
      />
      <VideoStreamNote setSnapShotClicked={setSnapShotClicked} snapShotURL={snapShotURL} />
    </Layout>
  );
};

export default ReplayPage;
