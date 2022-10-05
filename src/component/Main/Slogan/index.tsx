import {
  SloganContainer,
  SloganImage,
  SloganText,
  SloganTextLogo,
  SloganTextSection,
} from './style';
import SloganImageSrc from '@/assets/images/main_01.png';
import SloganTextSrc from '@/assets/images/logo_text.png';

const Slogan: React.FC = () => {
  return (
    <SloganContainer>
      <SloganTextSection>
        <SloganText>학습을</SloganText>
        <SloganText>더 편리하게</SloganText>
        <SloganText>더 스마트하게</SloganText>
        <SloganText>
          더 <SloganTextLogo src={SloganTextSrc} />
          하게
        </SloganText>
      </SloganTextSection>
      <SloganImage src={SloganImageSrc} />
    </SloganContainer>
  );
};

export default Slogan;
