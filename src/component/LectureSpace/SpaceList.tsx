import styled from 'styled-components';

import { Colors } from '@/util/Constant';
import { LectureStreamSpaceT, LectureVideoT } from '@/interfaces/space';
import spaceLectureImgSrc from '@/assets/icon/space_lecture.png';
import { useNavigate } from 'react-router-dom';

const SpaceList: React.FC<LectureStreamSpaceT> = ({
  id,
  name,
  description,
  videos = [],
}: LectureStreamSpaceT) => {
  return (
    <SpaceListContainer>
      <SpaceListTitleContainer>
        <SpaceListTitle>
          <Icon width={30} height={30} src={spaceLectureImgSrc} />
          <h1>{name}</h1>
        </SpaceListTitle>
        <SpaceListInput placeholder="검색어를 입력해주세요" />
      </SpaceListTitleContainer>
      <SpaceLectureListGroup>
        {videos.map((video, idx) => (
          <SpaceLectureAtom
            id={video.id}
            individualVideoId={video.individualVideoId}
            title={video.title}
            description={video.description}
            key={idx}
          />
        ))}
      </SpaceLectureListGroup>
    </SpaceListContainer>
  );
};

const SpaceListContainer = styled.div`
  width: 82%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  background: ${Colors.White1};
`;

const SpaceListTitleContainer = styled.div`
  width: 93%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SpaceListTitle = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  h1 {
    font-size: 30px;
  }
`;

interface IconProps {
  width: number;
  height: number;
}
const Icon = styled.img<IconProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`;

const SpaceListInput = styled.input`
  width: 35%;
  height: 50%;
  background: transparent;
  border: 1px solid ${Colors.Black1};
  border-radius: 8px;
  text-indent: 10px;
`;

const SpaceLectureListGroup = styled.div`
  width: 93%;
  height: 83%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const SpaceLectureAtom: React.FC<LectureVideoT> = ({
  individualVideoId,
  id,
  title,
  description,
}: LectureVideoT) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`/stream/?v=${individualVideoId}`);
  };

  return (
    <SpaceLectureAtomContainer onClick={onClickHandler}>
      <h1>{title}</h1>
      {description}
    </SpaceLectureAtomContainer>
  );
};

const SpaceLectureAtomContainer = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  gap: 70%;
  background: ${Colors.White};
  cursor: pointer;
`;

export default SpaceList;
