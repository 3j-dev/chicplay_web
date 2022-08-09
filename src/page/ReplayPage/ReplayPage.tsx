import { useState } from 'react';

import { Layout } from './style';
import VideoStream from '@/component/VideoStream';
import VideoNote from '@/component/VideoNote';
import { NOTE_TYPE } from '@/util/Constant';

const ReplayPage: React.FC = () => {
  const [snapShotClicked, setSnapShotClicked] = useState<boolean>(false);
  const [snapShotURL, setSnapShotURL] = useState<string>('');
  const [noteType, setNoteType] = useState<number>(NOTE_TYPE.MARKDOWN);

  return (
    <Layout>
      <VideoStream
        snapShotClicked={snapShotClicked}
        setSnapShotClicked={setSnapShotClicked}
        setSnapShotURL={setSnapShotURL}
        noteType={noteType}
      />
      <VideoNote
        setSnapShotClicked={setSnapShotClicked}
        snapShotURL={snapShotURL}
        setNoteType={setNoteType}
        noteType={noteType}
      />
    </Layout>
  );
};

export default ReplayPage;
