import { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { HiOutlineChevronLeft } from '@react-icons/all-files/hi/HiOutlineChevronLeft';

import { LectureSpaceT } from '@/interfaces/setting';
import { Colors } from '@/util/Constant';
import { Typography } from '@/styles/style';
import { UPLOAD } from './constant';
import youtubeImgSrc from '@/assets/images/youtube_logo2.png';
import webexImgSrc from '@/assets/images/webex_logo2.png';
import folderImgSrc from '@/assets/images/folder.png';
import FileUpload from './UploadAtom/FileUpload';
import WebexUpload from './UploadAtom/WebexUpload';
import YoutubeUpload from './UploadAtom/YoutubeUpload';
import { getHostedVideoList } from '@/api/setting';

interface VideoSpaceProps {
  setSelectedSpaceId: React.Dispatch<React.SetStateAction<number>>;
  selectedSpaceId?: number;
}

const VideoSpace: React.FC<VideoSpaceProps> = ({ setSelectedSpaceId }: VideoSpaceProps) => {
  const [videoSpaceData, setVideoSpaceData] = useState<LectureSpaceT[]>([]);
  useLayoutEffect(() => {
    getHostedVideoList().then((res) => setVideoSpaceData(res.data));
  }, []);

  return (
    <LectureAtomContainer>
      <h2>Space</h2>
      <LectureSpaceGroupContainer>
        <h2>Find your space</h2>
        <LectureSpaceGroup>
          {videoSpaceData.map((videoSpace, idx) => (
            <LectureSpaceAtom key={idx} onClick={() => setSelectedSpaceId(videoSpace.id)}>
              <LectureSpaceTextGroup width={40}>
                <h4>{videoSpace.name}</h4>
                {videoSpace.description}
              </LectureSpaceTextGroup>
              {videoSpace.videos.length > 0 ? (
                <LectureSpaceTextGroup width={20}>
                  {videoSpace.videos[0].title}
                </LectureSpaceTextGroup>
              ) : (
                <LectureSpaceTextGroup width={20}>{'아직 영상이 없습니다'}</LectureSpaceTextGroup>
              )}
              <LectureSpaceTextGroup width={10}>
                {`User 수 : ${videoSpace.users.length} 명`}
              </LectureSpaceTextGroup>
              <LectureSpaceTextGroup width={10}>
                {`Video 수 : ${videoSpace.videos.length} 개`}
              </LectureSpaceTextGroup>
            </LectureSpaceAtom>
          ))}
        </LectureSpaceGroup>
      </LectureSpaceGroupContainer>
    </LectureAtomContainer>
  );
};

const LectureAtomContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: 40px;
`;

const LectureSpaceGroupContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const LectureSpaceGroup = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  gap: 10px;
`;

const LectureSpaceAtom = styled.div`
  width: 98%;
  height: 100px;
  background: ${Colors.White};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  margin-top: 1%;
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const LectureSpaceTextGroup = styled.div<{ width: number }>`
  width: ${({ width }) => `${width}%`};
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${Typography.Paragraph2};
`;

const VideoUpload: React.FC<VideoSpaceProps> = ({
  setSelectedSpaceId,
  selectedSpaceId,
}: VideoSpaceProps) => {
  const [uploadWay, setUploadWay] = useState<number>(UPLOAD.Default);
  return (
    <LectureAtomContainer>
      <LectureFlexStart marginLeft={-3.5}>
        <HiOutlineChevronLeft size={25} onClick={() => setSelectedSpaceId(0)} />
        <h2>Upload</h2>
      </LectureFlexStart>
      <LectureSpaceGroupContainer>
        <LectureFlexStart marginLeft={0}>
          <UploadIconContainer onClick={() => setUploadWay(UPLOAD.File)}>
            <UploadIcon src={folderImgSrc} />
          </UploadIconContainer>
          <UploadIconContainer onClick={() => setUploadWay(UPLOAD.Webex)}>
            <UploadIcon src={webexImgSrc} />
          </UploadIconContainer>
          <UploadIconContainer onClick={() => setUploadWay(UPLOAD.Youtube)}>
            <UploadIcon src={youtubeImgSrc} />
          </UploadIconContainer>
        </LectureFlexStart>
        <LectureUploadSection>
          {getUploadContainer(uploadWay, selectedSpaceId || 0)}
        </LectureUploadSection>
      </LectureSpaceGroupContainer>
    </LectureAtomContainer>
  );
};

const getUploadContainer = (uploadWay: number, selectedSpaceId: number) => {
  switch (uploadWay) {
    case UPLOAD.File:
      return <FileUpload spaceId={selectedSpaceId} />;
    case UPLOAD.Webex:
      return <WebexUpload spaceId={selectedSpaceId} />;
    case UPLOAD.Youtube:
      return <YoutubeUpload spaceId={selectedSpaceId} />;
  }
};

const LectureFlexStart = styled.div<{ marginLeft: number }>`
  width: 40%;
  height: 10%;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-left: ${({ marginLeft }) => `${marginLeft}%`};
`;

const UploadIconContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 1px 1px rgb(0, 0, 0, 0.2);
  &:hover {
    border: 1px solid ${Colors.Gray0};
  }
  &:active {
    box-shadow: 0;
  }
`;

const UploadIcon = styled.img`
  width: 35px;
  height: 30px;
  cusor: pointer;
`;

const LectureUploadSection = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { VideoSpace, VideoUpload };
