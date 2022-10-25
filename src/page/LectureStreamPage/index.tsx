import { useLayoutEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Layout } from './style';
import VideoStream from '@/component/VideoStream';
import VideoNote from '@/component/VideoNote';
import { IndivudalVideoInfoT } from '@/interfaces/stream';
import { freshVideoAccessTime, getVideoInfo } from '@/api/stream';

const LectureStreamPage: React.FC = () => {
  const [snapShotClicked, setSnapShotClicked] = useState<boolean>(false);
  const [snapShotURL, setSnapShotURL] = useState<string>('');
  const [individualVideoInfo, setIndividualVideoInfo] = useState<IndivudalVideoInfoT | null>(null);

  const [searchParams] = useSearchParams();
  const individualVideoId = searchParams.get('v');

  useLayoutEffect(() => {
    if (individualVideoId) {
      getVideoInfo(individualVideoId).then((videoInfo) => {
        setIndividualVideoInfo(videoInfo.data);
      });
      freshVideoAccessTime(individualVideoId);
    }
  }, [individualVideoId]);

  return (
    <Layout>
      {individualVideoId && individualVideoInfo && (
        <>
          <VideoStream
            snapShotClicked={snapShotClicked}
            setSnapShotClicked={setSnapShotClicked}
            setSnapShotURL={setSnapShotURL}
            individualVideoInfo={individualVideoInfo}
            individualVideoId={individualVideoId}
          />
          <VideoNote
            individualVideoId={individualVideoId}
            setSnapShotClicked={setSnapShotClicked}
            snapShotURL={snapShotURL}
          />
        </>
      )}
    </Layout>
  );
};

export default LectureStreamPage;
