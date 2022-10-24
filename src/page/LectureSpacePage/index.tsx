import { useEffect, useLayoutEffect, useState } from 'react';

import { Layout } from './style';
import { SpaceList, SpaceSubmenu } from '@/component/LectureSpace';
import { getVideoList } from '@/api/space';
import { LectureStreamSpaceT } from '@/interfaces/space';
import { data } from './data';

const LectureSpace: React.FC = () => {
  const [lectureList, setLectureList] = useState<LectureStreamSpaceT[]>(data);
  const [lectureSpaceId, setLectureSpaceId] = useState<number>(1);
  const [nowSpaceInfo, setNowSpaceInfo] = useState<LectureStreamSpaceT>(data[0]);

  // useLayoutEffect(() => {
  //   const data = getVideoList();
  //   if (data.code !== undefined) setLectureList(data);
  //   setLectureSpaceId(lectureList[0].id);
  // }, []);
  useEffect(() => {
    const nowSpaceList = lectureList.filter((lecture) => lecture.id === lectureSpaceId && lecture);
    setNowSpaceInfo(nowSpaceList[0]);
  }, [lectureList, lectureSpaceId]);

  return (
    <Layout>
      <SpaceList {...(nowSpaceInfo || [])} />
      <SpaceSubmenu
        nowSpaceId={lectureSpaceId}
        setSpaceId={setLectureSpaceId}
        spaceList={lectureList}
      />
    </Layout>
  );
};

export default LectureSpace;
