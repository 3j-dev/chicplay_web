import { useEffect, useLayoutEffect, useState } from 'react';

import { Layout } from './style';
import { SpaceList, SpaceSubmenu } from '@/component/LectureSpace';
import { getVideoList } from '@/api/space';
import { LectureStreamSpaceT } from '@/interfaces/space';
import { pushNotification } from '@/util/notification';

const LectureSpace: React.FC = () => {
  const [lectureList, setLectureList] = useState<LectureStreamSpaceT[]>([]);
  const [lectureSpaceId, setLectureSpaceId] = useState<number>(1);
  const [nowSpaceInfo, setNowSpaceInfo] = useState<LectureStreamSpaceT | null>(null);

  useLayoutEffect(() => {
    getVideoList()
      .then((res) => {
        setLectureList(res.data);
        setNowSpaceInfo(res.data[0]);
        setLectureSpaceId(res.data[0].id);
      })
      .catch(() => pushNotification('서버 통신에 오류가 발생했습니다', 'error'));
  }, []);

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
