import styled from 'styled-components';
import { format, parseISO } from 'date-fns';

import mypageProfileImgSrc from '@/assets/icon/mypage_profile.png';
import mypageRecentStudyImgSrc from '@/assets/icon/mypage_recent_study.png';
import mypageRecentNoteImgSrc from '@/assets/icon/mypage_recent_note.png';
import mypageStatisticsImgSrc from '@/assets/icon/mypage_statistic.png';
import mypageRecentVideosImgSrc from '@/assets/icon/mypage_recent_videos.png';
import mypageCompleted from '@/assets/icon/mypage_completed.png';
import webexLogoImgSrc from '@/assets/images/webex_logo2.png';
import { MyDataT, StudiedVideoT } from '@/interfaces/mypage';
import { Typography } from '@/styles/style';
import { Colors } from '@/util/Constant';
import { minimizeString } from '@/util/minimizeString';

interface ContentAtomFlex {
  direction?: 'row' | 'column';
  gap?: number;
  isCenter?: boolean;
}

interface ProfileProps {
  email: string;
  name: string;
  picture: string;
}

const MyProfile: React.FC<ProfileProps> = ({ email, name, picture }) => {
  return (
    <MypageAtomContainer>
      <MypageAtomTitle>
        <MypageAtomIcon idx={0}>
          <MypageIcon src={mypageProfileImgSrc} />
        </MypageAtomIcon>
        {'프로필'}
      </MypageAtomTitle>
      <MypageAtomContent>{`${name} 님, 좋은 하루 보내셨나요`}</MypageAtomContent>
    </MypageAtomContainer>
  );
};

const MyRecentStudy: React.FC<StudiedVideoT> = ({
  videoSpaceId,
  videoSpaceName,
  videoDescription,
  individualVideoId,
  updatedDate,
  videoTitle,
  videoSpaceDescription,
  lastAccessTime,
}) => {
  return (
    <MypageAtomContainer>
      <MypageAtomTitle>
        <MypageAtomIcon idx={1}>
          <MypageIcon src={mypageRecentStudyImgSrc} />
        </MypageAtomIcon>
        {'최근 학습 강의'}
      </MypageAtomTitle>
      <MypageAtomContent direction="column">
        <MypageText1>{videoTitle}</MypageText1>
        <MypageText2>{videoDescription}</MypageText2>
      </MypageAtomContent>
    </MypageAtomContainer>
  );
};

const MyRecentNote: React.FC = () => {
  return (
    <MypageAtomContainer>
      <MypageAtomTitle>
        <MypageAtomIcon idx={2}>
          <MypageIcon src={mypageRecentNoteImgSrc} />
        </MypageAtomIcon>
        {'최근 내 노트'}
      </MypageAtomTitle>
      <MypageAtomContent></MypageAtomContent>
    </MypageAtomContainer>
  );
};

interface MyStatProps {
  videoSpaceCount: number;
  totalIndividualVideoCount: number;
  completedIndividualVideoCount: number;
}

const MyStudyStat: React.FC<MyStatProps> = ({
  videoSpaceCount,
  totalIndividualVideoCount,
  completedIndividualVideoCount,
}: MyStatProps) => {
  return (
    <MypageAtomContainer>
      <MypageAtomTitle>
        <MypageAtomIcon idx={3}>
          <MypageIcon src={mypageStatisticsImgSrc} />
        </MypageAtomIcon>
        {'학습 통계'}
      </MypageAtomTitle>
      <MypageAtomContent direction="row" gap={30}>
        <MypageStatAtom>
          <MypageStatBigText>{completedIndividualVideoCount}</MypageStatBigText>
          {'완료 강의 수'}
        </MypageStatAtom>
        <MypageStatAtom>
          <MypageStatBigText>{totalIndividualVideoCount}</MypageStatBigText>
          {'전체 강의 수'}
        </MypageStatAtom>
        <MypageStatAtom>
          <MypageStatBigText>{videoSpaceCount}</MypageStatBigText>
          {'진행 강의 수'}
        </MypageStatAtom>
      </MypageAtomContent>
    </MypageAtomContainer>
  );
};

interface MyAuthProps {
  connectedWebex: boolean;
}

const MyAuthAccount: React.FC<MyAuthProps> = ({ connectedWebex }: MyAuthProps) => {
  return (
    <MypageAtomContainer>
      <MypageAtomTitle>
        <MypageAtomIcon idx={4}>
          <MypageIcon src={mypageRecentVideosImgSrc} />
        </MypageAtomIcon>
        {'계정 연동 정보'}
      </MypageAtomTitle>
      <MypageAtomContent isCenter={true}>
        {connectedWebex && (
          <AuthConnectSection>
            <AuthConnectImage>
              <AuthImg src={webexLogoImgSrc} />
            </AuthConnectImage>
            <AuthConnectText>
              <h5>Webex 연결됨</h5>
            </AuthConnectText>
          </AuthConnectSection>
        )}
      </MypageAtomContent>
    </MypageAtomContainer>
  );
};

interface MyVideoListProps {
  dashboardIndividualVideos: StudiedVideoT[];
}

const MyVideoList: React.FC<MyVideoListProps> = ({
  dashboardIndividualVideos,
}: MyVideoListProps) => {
  return (
    <MypageAtomContainer>
      <MypageAtomTitle>
        <MypageAtomIcon idx={5}>
          <MypageIcon src={mypageCompleted} />
        </MypageAtomIcon>
        {'내 강의'}
      </MypageAtomTitle>
      <MypageAtomContent direction="column">
        {dashboardIndividualVideos.map((indiviualVideo, idx) => {
          return (
            <MypageVideoAtom key={idx}>
              {minimizeString(indiviualVideo.videoTitle, 40)}
              <MypageVideoSmallText>
                {format(parseISO(indiviualVideo.lastAccessTime), 'yyyy.MM.dd')}
              </MypageVideoSmallText>
            </MypageVideoAtom>
          );
        })}
      </MypageAtomContent>
    </MypageAtomContainer>
  );
};

const MypageAtomContainer = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const MypageAtomTitle = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  ${Typography.Heading4};
  font-weight: 500;
`;

const MypageAtomIcon = styled.div<{ idx: number }>`
  width: 50px;
  height: 50px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ idx }) => MypageAtomIconColors[idx]};
`;

const MypageIcon = styled.img`
  width: 25px;
  height: 25px;
`;

const MypageAtomContent = styled.div<ContentAtomFlex>`
  width: 95%;
  height: 50%;
  display: flex;
  overflow: auto;
  flex-direction: ${({ direction }) => `${direction}`};
  gap: ${({ gap }) => `${gap}px`};
  justify-content: ${({ isCenter }) => isCenter && 'center'};
  align-items: ${({ isCenter }) => isCenter && 'center'};
  ${Typography.Paragraph1};
`;

const MypageText1 = styled.p`
  ${Typography.Paragraph1};
`;

const MypageText2 = styled.p`
  ${Typography.Paragraph2};
`;

const MypageAtomIconColors: string[] = [
  Colors.Blue4,
  Colors.Green,
  Colors.Yellow,
  Colors.Red1,
  Colors.Purple,
  Colors.Black1,
];

const MypageStatAtom = styled.div`
  width: 40%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${Typography.Paragraph1};
  gap: 5px;
`;

const MypageStatBigText = styled.div`
  width: 100%;
  height: 70%;
  border-bottom: 1px solid ${Colors.Red1};
  font-size: 36px;
  line-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MypageVideoAtom = styled.div`
  width: 95%;
  height: 30px;
  ${Typography.Paragraph2};
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${Colors.Blue5};
`;

const MypageVideoSmallText = styled.p`
  ${Typography.Paragraph3};
`;

const AuthConnectSection = styled.div`
  width: 90%;
  height: 40%;
  display: flex;
  align-items: center;
  background: ${Colors.White1};
  border-radius: 8px;
`;

const AuthConnectImage = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AuthConnectText = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const AuthImg = styled.img`
  width: 30px;
  height: 26px;
`;

export { MyProfile, MyRecentStudy, MyRecentNote, MyStudyStat, MyAuthAccount, MyVideoList };
