import { GiGraduateCap } from '@react-icons/all-files/gi/GiGraduateCap';

import {
  FeatureBigText,
  FeatureContainer,
  FeatureContent,
  FeatureContentGroup,
  FeatureIcon,
  FeatureSmallText,
  FeatureTextSection,
} from './style';
import { FeatureData } from './data';

interface FeatureDataProps {
  bigText: string;
  smallText: string;
}

interface FeatureAtomProps extends FeatureDataProps {
  idx: number;
}

const FeatureAtom: React.FC<FeatureAtomProps> = ({ idx, bigText, smallText }: FeatureAtomProps) => {
  return (
    <FeatureContent>
      <FeatureIcon idx={idx}>
        <GiGraduateCap color="white" size={50} />
      </FeatureIcon>
      <FeatureTextSection>
        <FeatureBigText>{bigText}</FeatureBigText>
        <FeatureSmallText>{smallText}</FeatureSmallText>
      </FeatureTextSection>
    </FeatureContent>
  );
};

const Feature: React.FC = () => {
  return (
    <FeatureContainer>
      <FeatureContentGroup>
        {FeatureData.map((cur, idx) => (
          <FeatureAtom idx={idx} key={idx} bigText={cur.bigText} smallText={cur.smallText} />
        ))}
      </FeatureContentGroup>
    </FeatureContainer>
  );
};

export default Feature;
