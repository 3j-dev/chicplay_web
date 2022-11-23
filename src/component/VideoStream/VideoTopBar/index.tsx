import { TbList, TbSettings } from 'react-icons/tb';

import { VideoTopBarContainer, VideoTopBarLeft, VideoTopBarRight } from './style';

interface Props {
  videoTitle: string;
}

const VideoTopBar: React.FC<Props> = ({ videoTitle }: Props) => {
  return (
    <VideoTopBarContainer>
      <VideoTopBarLeft>
        <h4>{videoTitle}</h4>
      </VideoTopBarLeft>
      <VideoTopBarRight></VideoTopBarRight>
    </VideoTopBarContainer>
  );
};

export default VideoTopBar;
