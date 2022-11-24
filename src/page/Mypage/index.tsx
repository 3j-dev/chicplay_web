import { useLayoutEffect, useState } from 'react';

import { Layout } from './style';
import Content from '@/component/Common/Content';
import Submenu from '@/component/Common/Submenu';
import { dashBoardData, myTempData } from './data';
import { MyDataT } from '@/interfaces/mypage';
import { getMyPageDashBoard } from '@/api/mypage';
import {
  MyProfile,
  MyRecentStudy,
  MyRecentNote,
  MyStudyStat,
  MyAuthAccount,
  MyVideoList,
} from '@/component/Mypage/MypageAtom';
import { pushNotification } from '@/util/notification';

const Mypage: React.FC = () => {
  const [myData, setMyData] = useState<MyDataT>(myTempData);

  useLayoutEffect(() => {
    getMyPageDashBoard()
      .then((res) => {
        recentStudyNullCheckAndSetData(res.data);
      })
      .catch(() => pushNotification('서버와의 통신에 에러가 있습니다', 'error'));
  }, []);

  const recentStudyNullCheckAndSetData = (data: MyDataT) => {
    if (data.lastStudiedIndividualVideo !== null) {
      setMyData(data);
    } else {
      const newData = data;
      newData.lastStudiedIndividualVideo = {
        videoSpaceId: -1,
        videoSpaceName: '',
        videoSpaceDescription: '',
        individualVideoId: '',
        updatedDate: '',
        videoTitle: '',
        videoDescription: '',
        lastAccessTime: '',
      };
      setMyData(newData);
    }
  };

  return (
    <Layout>
      <Submenu
        allMenuState={[0]}
        nowMenuState={0}
        allMenuName={dashBoardData}
        isPlusMethodExist={false}
      />
      <Content
        atomInRow={2}
        atomCount={6}
        childrens={[
          <MyProfile email={myData.email} name={myData.name} picture={myData.picture} key={0} />,
          <MyRecentStudy
            videoSpaceId={myData.lastStudiedIndividualVideo.videoSpaceId}
            videoSpaceName={myData.lastStudiedIndividualVideo.videoSpaceName}
            videoDescription={myData.lastStudiedIndividualVideo.videoDescription}
            individualVideoId={myData.lastStudiedIndividualVideo.individualVideoId}
            updatedDate={myData.lastStudiedIndividualVideo.updatedDate}
            videoTitle={myData.lastStudiedIndividualVideo.videoTitle}
            videoSpaceDescription={myData.lastStudiedIndividualVideo.videoSpaceDescription}
            lastAccessTime={myData.lastStudiedIndividualVideo.lastAccessTime}
            key={1}
          />,
          <MyRecentNote key={2} />,
          <MyStudyStat
            key={3}
            videoSpaceCount={myData.videoSpaceCount}
            totalIndividualVideoCount={myData.totalIndividualVideoCount}
            completedIndividualVideoCount={myData.completedIndividualVideoCount}
          />,
          <MyAuthAccount connectedWebex={myData.connectedWebex} key={4} />,
          <MyVideoList key={5} dashboardIndividualVideos={myData.dashboardIndividualVideos} />,
        ]}
      />
    </Layout>
  );
};

export default Mypage;
