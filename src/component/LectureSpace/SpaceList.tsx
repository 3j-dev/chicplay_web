import styled from 'styled-components';

import { Colors } from '@/util/Constant';
import { LectureStreamSpaceT, LectureVideoT } from '@/interfaces/space';
import spaceLectureImgSrc from '@/assets/icon/space_lecture.png';
import { useNavigate } from 'react-router-dom';

import formatDate from '@/util/fomatDate';
import { parseISO } from 'date-fns';

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
        {videos.map((video) => (
          <SpaceLectureAtom
            id={video.id}
            individualVideoId={video.individualVideoId}
            title={video.title}
            description={video.description}
            key={video.id}
            lastAccessTime={video.lastAccessTime}
            progressRate={video.progressRate}
            thumbnailImagePath={video.thumbnailImagePath}
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
  lastAccessTime,
  progressRate,
  thumbnailImagePath,
}: LectureVideoT) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`/stream?v=${individualVideoId}`);
  };

  return (
    <SpaceLectureAtomContainer onClick={onClickHandler}>
      <SpaceLectureThumbnail src={thumbnailImagePath} />
      <SpaceLectureText width={40}>
        <SpaceLectureTitle>
          <h4>{title}</h4>
        </SpaceLectureTitle>
        <SpaceLectureProgressContainer progressRate={progressRate}>
          <h5>{`${progressRate}% 완료`}</h5>
        </SpaceLectureProgressContainer>
      </SpaceLectureText>
      <SpaceLectureLastAccess>
        <h6>{formatDate(parseISO(lastAccessTime))}</h6>
      </SpaceLectureLastAccess>
    </SpaceLectureAtomContainer>
  );
};

const SpaceLectureAtomContainer = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  background: ${Colors.White};
  cursor: pointer;
`;

const SpaceLectureThumbnail = styled.img`
  height: 80%;
  width: auto;
  border-radius: 8px;
  margin-left: 2%;
`;

const SpaceLectureText = styled.div<{ width: number }>`
  width: ${({ width }) => `${width}%`};
  height: 80%;
  margin-left: 4%;
  overflow-y: auto;
  display: flex;
  gap: 5%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const SpaceLectureTitle = styled.div`
  width: 100%;
  height: 50%;
  overflow-y: auto;
`;

const SpaceLectureProgressContainer = styled.div<{ progressRate: number }>`
  width: 30%;
  height: 30%;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ progressRate }) => (progressRate === 100 ? Colors.Blue2 : Colors.Red2)};
  h5 {
    color: ${({ progressRate }) => (progressRate === 100 ? Colors.Blue : Colors.Red3)};
  }
`;

const SpaceLectureLastAccess = styled.div`
  width: 30%;
  height: 70%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  h6 {
    color: ${Colors.Gray1};
  }
`;

export default SpaceList;
