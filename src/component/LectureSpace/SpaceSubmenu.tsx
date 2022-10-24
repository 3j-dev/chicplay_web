import styled from 'styled-components';

import { Colors } from '@/util/Constant';
import spaceListIconImgSrc from '@/assets/icon/space_video_list.png';
import { LectureStreamSpaceT } from '@/interfaces/space';

interface SpaceSubmenuProps {
  nowSpaceId: number;
  setSpaceId: React.Dispatch<React.SetStateAction<number>>;
  spaceList: LectureStreamSpaceT[];
}

const SpaceSubmenu: React.FC<SpaceSubmenuProps> = ({
  nowSpaceId,
  setSpaceId,
  spaceList,
}: SpaceSubmenuProps) => {
  return (
    <SpaceSubmenuContainer>
      <SpaceSubmenuTitle>
        <ListIcon src={spaceListIconImgSrc} />
        <h6>나의 강의 목록</h6>
      </SpaceSubmenuTitle>
      <SpaceSubmenuList>
        {spaceList.map((spaceInfo, idx) => (
          <Space
            isNowSpace={nowSpaceId === spaceInfo.id}
            spaceId={spaceInfo.id}
            spaceTitle={spaceInfo.name}
            setSpaceId={setSpaceId}
            key={idx}
          />
        ))}
      </SpaceSubmenuList>
    </SpaceSubmenuContainer>
  );
};

const SpaceSubmenuContainer = styled.div`
  width: 18%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2%;
`;

const SpaceSubmenuTitle = styled.div`
  width: 100%;
  height: 6%;
  border: 1px solid ${Colors.Gray};
  background: ${Colors.Gray0};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

const ListIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 5%;
`;

const SpaceSubmenuList = styled.div`
  width: 90%;
  height: 85%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

interface SpaceProps {
  isNowSpace: boolean;
  setSpaceId: React.Dispatch<React.SetStateAction<number>>;
  spaceId: number;
  spaceTitle: string;
}

const Space: React.FC<SpaceProps> = ({
  isNowSpace,
  setSpaceId,
  spaceId,
  spaceTitle,
}: SpaceProps) => {
  return (
    <SpaceContainer onClick={() => setSpaceId(spaceId)} isNowSpace={isNowSpace}>
      <h4>{spaceTitle}</h4>
    </SpaceContainer>
  );
};

const SpaceContainer = styled.div<{ isNowSpace: boolean }>`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  background: ${({ isNowSpace }) => (isNowSpace ? Colors.Blue2 : Colors.White)};
  color: ${({ isNowSpace }) => (isNowSpace ? Colors.Blue : Colors.Black1)};
  h4 {
    margin-left: 7%;
  }
`;

export default SpaceSubmenu;
