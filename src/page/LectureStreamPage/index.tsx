import { useCallback, useLayoutEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Layout } from './style';
import VideoStream from '@/component/VideoStream';
import VideoNote from '@/component/VideoNote';
import { IndivudalVideoInfoT } from '@/interfaces/stream';
import { freshVideoAccessTime, getVideoInfo } from '@/api/stream';
import { getErrorToast } from '@/api/error/error.config';

const LectureStreamPage: React.FC = () => {
  const [snapShotClicked, setSnapShotClicked] = useState<boolean>(false);
  const [snapShotURL, setSnapShotURL] = useState<string>('');
  const [individualVideoInfo, setIndividualVideoInfo] = useState<IndivudalVideoInfoT | null>(null);

  const [searchParams] = useSearchParams();
  const individualVideoId = searchParams.get('v');

  const initialize = useCallback(async () => {
    if (individualVideoId) {
      const { status, data, code } = await getVideoInfo(individualVideoId);
      if (status === 200) {
        setIndividualVideoInfo(data);
        freshVideoAccessTime(individualVideoId);
      } else {
        getErrorToast(code);
      }
    }
  }, [individualVideoId]);

  useLayoutEffect(() => {
    initialize();
  }, [initialize]);

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
