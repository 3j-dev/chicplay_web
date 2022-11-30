import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

import { Layout } from './style';
import { SpaceList, SpaceSubmenu } from '@/component/LectureSpace';
import { getVideoList } from '@/api/space';
import { LectureStreamSpaceT } from '@/interfaces/space';
import { getErrorToast } from '@/api/error/error.config';

const LectureSpace: React.FC = () => {
  const [lectureList, setLectureList] = useState<LectureStreamSpaceT[]>([]);
  const [lectureSpaceId, setLectureSpaceId] = useState<number>(1);
  const [nowSpaceInfo, setNowSpaceInfo] = useState<LectureStreamSpaceT | null>(null);

  const initialize = useCallback(async () => {
    const { status, data, code } = await getVideoList();
    if (status === 200) {
      setLectureList(data);
      setNowSpaceInfo(data[0]);
      setLectureSpaceId(data[0].id);
    } else {
      getErrorToast(code);
    }
  }, []);

  useLayoutEffect(() => {
    initialize();
  }, [initialize]);

  useEffect(() => {
    const nowSpaceList = lectureList.filter((lecture) => lecture.id === lectureSpaceId && lecture);
    setNowSpaceInfo(nowSpaceList[0]);
  }, [lectureList, lectureSpaceId]);

  return (
    <Layout>
      {lectureList.length > 0 && nowSpaceInfo !== null && (
        <>
          <SpaceList {...(nowSpaceInfo || [])} />
          <SpaceSubmenu
            nowSpaceId={lectureSpaceId}
            setSpaceId={setLectureSpaceId}
            spaceList={lectureList}
          />
        </>
      )}
    </Layout>
  );
};

export default LectureSpace;
