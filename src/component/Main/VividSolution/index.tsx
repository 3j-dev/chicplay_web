import {
  VividSolutionBigImage,
  VividSolutionBigImageGroup,
  VividSolutionBigText,
  VividSolutionContainer,
  VividSolutionImageGroup,
  VividSolutionSmallImage,
  VividSolutionSmallImageGroup,
  VividSolutionSmallText,
  VividSolutionTextGroup,
} from './style';

import TeamsImageSrc from '@/assets/images/teams_logo.png';
import VividImageSrc from '@/assets/images/vivid_logo.png';
import WebexImageSrc from '@/assets/images/webex_logo.png';
import YoutubeImageSrc from '@/assets/images/youtube_logo.png';
import ZoomImageSrc from '@/assets/images/zoom_logo.png';

const VividSolution: React.FC = () => {
  return (
    <VividSolutionContainer>
      <VividSolutionTextGroup>
        <VividSolutionSmallText>다양한 툴 하나하나 관리하는 이전과 안녕</VividSolutionSmallText>
        <VividSolutionBigText>VIVID 하나면 충분합니다</VividSolutionBigText>
      </VividSolutionTextGroup>
      <VividSolutionImageGroup>
        <VividSolutionSmallImageGroup>
          <VividSolutionSmallImage src={WebexImageSrc} />
          <VividSolutionSmallImage src={TeamsImageSrc} />
        </VividSolutionSmallImageGroup>
        <VividSolutionBigImageGroup>
          <VividSolutionSmallImage src={ZoomImageSrc} />
          <VividSolutionBigImage src={VividImageSrc} />
          <VividSolutionSmallImage src={YoutubeImageSrc} />
        </VividSolutionBigImageGroup>
      </VividSolutionImageGroup>
    </VividSolutionContainer>
  );
};

export default VividSolution;
