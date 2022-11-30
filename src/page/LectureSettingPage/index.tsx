import { useState, useLayoutEffect, useEffect, useCallback } from 'react';

import { Layout } from './style';
import { tempSpace } from './data';
import Submenu from '@/component/Common/Submenu';
import Content from '@/component/Common/Content';
import { SettingVideoList, SettingUserList, SettingUserAdd } from '@/component/Setting/SettingAtom';
import { LectureSpaceT, SpaceVideoT, SpaceUserT } from '@/interfaces/setting';
import SettingModal from '@/component/Setting/SettingModal';
import { getHostedVideoList } from '@/api/setting';
import { getErrorToast } from '@/api/error/error.config';

const LectureSettingPage: React.FC = () => {
  const [lectureSpaceData, setLectureSpaceData] = useState<LectureSpaceT[]>([]);
  const [nowSpaceId, setNowSpaceId] = useState<number>(0);
  const [nowSpaceData, setNowSpaceData] = useState<LectureSpaceT>(tempSpace);

  const initialize = useCallback(async () => {
    const { status, data, code } = await getHostedVideoList();
    if (status === 200) {
      setLectureSpaceData(data);
      setNowSpaceId(data[0].id);
    } else {
      getErrorToast(code);
    }
  }, []);

  useLayoutEffect(() => {
    initialize();
  }, [initialize]);

  useEffect(() => {
    if (nowSpaceId)
      lectureSpaceData.forEach((space) => space.id === nowSpaceId && setNowSpaceData(space));
  }, [nowSpaceId, lectureSpaceData]);

  return (
    <Layout>
      <Submenu
        allMenuState={getAllMenuState(lectureSpaceData)}
        allMenuName={getAllMenuName(lectureSpaceData)}
        nowMenuState={nowSpaceId}
        changeMenuState={setNowSpaceId}
        isPlusMethodExist={true}
        plusMethodComponent={<SettingModal />}
      />
      <Content
        atomCount={3}
        atomInRow={3}
        childrens={[
          <SettingVideoList videoList={getVideoListData(nowSpaceData)} key="1" />,
          <SettingUserList
            videoSpaceId={nowSpaceId}
            userList={getUserListData(nowSpaceData)}
            key="2"
          />,
          <SettingUserAdd videoSpaceId={nowSpaceData.id} key="3" />,
        ]}
      />
    </Layout>
  );
};

const getAllMenuState = (lectureSpaceGroup: LectureSpaceT[]): number[] => {
  if (!lectureSpaceGroup) return [];
  return lectureSpaceGroup.map((lectureSpace: LectureSpaceT) => lectureSpace.id);
};

const getAllMenuName = (lectureSpaceGroup: LectureSpaceT[]): string[] => {
  if (!lectureSpaceGroup) return [];
  return lectureSpaceGroup.map((lectureSpace: LectureSpaceT) => lectureSpace.name);
};

const getUserListData = (lectureSpace: LectureSpaceT): SpaceUserT[] => {
  if (!lectureSpace) return [{ email: '', name: '', picture: '' }];
  return lectureSpace.users;
};

const getVideoListData = (lectureSpace: LectureSpaceT): SpaceVideoT[] => {
  if (!lectureSpace) return [{ id: 0, title: '', description: '' }];
  return lectureSpace.videos;
};
export default LectureSettingPage;
