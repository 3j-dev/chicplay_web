import { ToVividContainer, ToVividImage, ToVividText, ToVividTextGroup } from './style';

import ToVividImageSrc from '@/assets/images/main_04.png';

const ToVivid: React.FC = () => {
  return (
    <ToVividContainer>
      <ToVividTextGroup>
        <ToVividText>영상을 통한 교육 전문</ToVividText>
        <ToVividText>VIVID에게 맡기세요</ToVividText>
      </ToVividTextGroup>
      <ToVividImage src={ToVividImageSrc} />
    </ToVividContainer>
  );
};

export default ToVivid;
