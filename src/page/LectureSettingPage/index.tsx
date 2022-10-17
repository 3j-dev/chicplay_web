import { useState, useLayoutEffect, useEffect } from 'react';

import { Layout } from './style';
import { data, tempSpace } from './data';
import Submenu from '@/component/Common/Submenu';
import Content from '@/component/Common/Content';
import { SettingVideoList, SettingUserList, SettingUserAdd } from '@/component/Setting/SettingAtom';
import { LectureSpaceT, SpaceVideoT, SpaceUserT } from '@/interfaces/setting';
import SettingModal from '@/component/Setting/SettingModal';

const LectureSettingPage: React.FC = () => {
  const [lectureSpaceData, setLectureSpaceData] = useState<LectureSpaceT[]>(data);
  const [nowSpaceName, setNowSpaceName] = useState<string>('');
  const [nowSpaceData, setNowSpaceData] = useState<LectureSpaceT>(tempSpace);

  useLayoutEffect(() => {
    //api call and setLectureSpaceData
    setNowSpaceName(data[0].name);
  }, []);

  useEffect(() => {
    if (nowSpaceName)
      data.forEach((space) => space.name === nowSpaceName && setNowSpaceData(space));
  }, [nowSpaceName]);

  return (
    <Layout>
      <Submenu
        allMenuState={getAllMenuState(lectureSpaceData)}
        nowMenuState={nowSpaceName}
        changeMenuState={setNowSpaceName}
        isPlusMethodExist={true}
        plusMethodComponent={<SettingModal />}
      />
      <Content
        atomCount={3}
        atomInRow={3}
        childrens={[
          <SettingVideoList videoList={getVideoListData(nowSpaceData)} key="1" />,
          <SettingUserList userList={getUserListData(nowSpaceData)} key="2" />,
          <SettingUserAdd videoSpaceId={nowSpaceData.id} key="3" />,
        ]}
      />
    </Layout>
  );
};

const getAllMenuState = (lectureSpaceGroup: LectureSpaceT[] | null): string[] => {
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
