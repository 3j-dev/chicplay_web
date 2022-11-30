import styled from 'styled-components';

import { Colors } from '@/styles/color';

const SloganContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SloganTextSection = styled.div`
  width: 41%;
  height: 100%;
  background-color: ${Colors.Black1};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

const SloganImage = styled.img`
  width: 59%;
  height: 100%;
`;

const SloganText = styled.div`
  color: ${Colors.White};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 48px;
  font-weight: 700;
  gap: 10px;
  margin-left: 10%;
`;

const SloganTextLogo = styled.img`
  width: 220px;
  height: 180px;
`;

export { SloganContainer, SloganTextSection, SloganImage, SloganText, SloganTextLogo };
