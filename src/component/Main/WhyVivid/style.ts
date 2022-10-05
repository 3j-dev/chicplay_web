import { Colors } from '@/util/Constant';
import styled from 'styled-components';

import { POSITION } from './constant';

interface EllipseProps {
  idx: number;
  position: string;
}

const getBackgroundColor = (idx: number): string => {
  switch (idx) {
    case 0:
      return Colors.Blue4;
    case 1:
      return Colors.Green;
    case 2:
      return Colors.Red1;
    case 3:
      return Colors.Yellow;
    default:
      return '';
  }
};

const WhyVividContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TroubleContainer = styled.div<{ position: string }>`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${({ position }) => (position === POSITION.TOP ? 'flex-start' : 'flex-end')};
  align-items: center;
  gap: 100px;
`;

const TroubleImage = styled.img`
    width: 100%;
    aspect-ratio = 1/1;
    margin-top: -50%;
`;

const TroubleTextSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40%;
`;

const TroubleBigText = styled.span`
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.07em;
  margin-bottom: 10%;
`;

const TroubleSmallText = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.07em;
  margin-bottom: 6%;
`;

const Ellipse = styled.div<EllipseProps>`
  width: 20px;
  height: 10px;
  border-radius: ${({ position }) =>
    position === POSITION.TOP ? '10px 10px 0 0' : '0 0 10px 10px'};
  background-color: ${({ idx }) => getBackgroundColor(idx)};
  margin-bottom: 1%;
`;

export {
  WhyVividContainer,
  TroubleContainer,
  TroubleImage,
  TroubleTextSection,
  TroubleBigText,
  TroubleSmallText,
  Ellipse,
};
