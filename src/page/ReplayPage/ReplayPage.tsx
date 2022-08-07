import { useState } from 'react';

import { Layout } from './style';
import VideoStream from '@/component/VideoStream';
import VideoNote from '@/component/VideoNote';

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
      <VideoNote setSnapShotClicked={setSnapShotClicked} snapShotURL={snapShotURL} />
    </Layout>
  );
};

export default ReplayPage;
