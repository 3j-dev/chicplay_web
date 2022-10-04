import {
  WhyVividContainer,
  TroubleContainer,
  TroubleImage,
  TroubleTextSection,
  TroubleBigText,
  TroubleSmallText,
  Ellipse,
} from './style';
import { POSITION } from './constant';
import TroubleImage1Src from '@/assets/images/main_02.png';
import TroubleImage2Src from '@/assets/images/main_03.png';

const WhyVivid: React.FC = () => {
  return (
    <WhyVividContainer>
      <TroubleContainer position={POSITION.TOP}>
        <TroubleImage src={TroubleImage1Src} />
        <TroubleTextSection>
          <TroubleBigText>수업을 관리하는 게 쉽지 않죠?</TroubleBigText>
          <Ellipse idx={0} position={POSITION.TOP} />
          <TroubleSmallText>서로 다른 분반 영상 관리가 쉽지 않아요.</TroubleSmallText>
          <Ellipse idx={1} position={POSITION.BOTTOM} />
          <TroubleSmallText>영상이 자동으로 뿌려졌으면 좋겠어요.</TroubleSmallText>
        </TroubleTextSection>
      </TroubleContainer>
      <TroubleContainer position={POSITION.BOTTOM}>
        <TroubleTextSection>
          <TroubleBigText>내 학습 기록들을 더 잘 관리할 수는 없을까요?</TroubleBigText>
          <Ellipse idx={2} position={POSITION.TOP} />
          <TroubleSmallText>유튜브에서 학습한 기록들을 편하게 관리할래요.</TroubleSmallText>
          <Ellipse idx={3} position={POSITION.BOTTOM} />
          <TroubleSmallText>유튜브에 필기가 되면 안될까요?</TroubleSmallText>
        </TroubleTextSection>
        <TroubleImage src={TroubleImage2Src} />
      </TroubleContainer>
    </WhyVividContainer>
  );
};

export default WhyVivid;
