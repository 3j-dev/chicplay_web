import { TbList, TbSettings } from 'react-icons/tb';

import { VideoTopBarContainer, VideoTopBarLeft, VideoTopBarRight } from './style';

interface Props {
  videoTitle: string;
}

const VideoTopBar: React.FC<Props> = ({ videoTitle }: Props) => {
  return (
    <VideoTopBarContainer>
      <VideoTopBarLeft>
        <TbList size={20} />
        <h4>{videoTitle}</h4>
      </VideoTopBarLeft>
      <VideoTopBarRight>
        <TbSettings size={20} />
      </VideoTopBarRight>
    </VideoTopBarContainer>
  );
};

export default VideoTopBar;
