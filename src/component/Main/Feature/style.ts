import styled from 'styled-components';

import { Colors } from '@/styles/color';

const getBackgroundColor = (idx: number): string => {
  switch (idx) {
    case 0:
      return Colors.Yellow;
    case 1:
      return Colors.Blue4;
    case 2:
      return Colors.Red1;
    default:
      return '';
  }
};

const FeatureContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.White1};
`;

const FeatureContentGroup = styled.div`
  width: 80%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;

const FeatureContent = styled.div`
  width: 28%;
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background-color: ${Colors.White1};
  border-radius: 70px;
  box-shadow: 0px -20px 20px rgba(255, 255, 255, 0.8), 0px 20px 30px rgba(49, 50, 79, 0.1);
`;

const FeatureIcon = styled.div<{ idx: number }>`
  width: 25%;
  aspect-ratio: 1/1;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ idx }) => getBackgroundColor(idx)};
`;

const FeatureTextSection = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  word-wrap: break-word;
`;

const FeatureBigText = styled.span`
  font-size: 24px;
  font-height: 26px;
  font-weight: 500;
  letter-spacing: -0.07em;
`;

const FeatureSmallText = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.07em;
  text-align: center;
`;

export {
  FeatureContainer,
  FeatureContentGroup,
  FeatureContent,
  FeatureIcon,
  FeatureTextSection,
  FeatureBigText,
  FeatureSmallText,
};
