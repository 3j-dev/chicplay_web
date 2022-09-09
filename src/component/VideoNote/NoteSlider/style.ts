import styled from 'styled-components';

import { Colors } from '@/util/Constant';
import { Typography } from '@/styles/style';

interface Props {
  activated: boolean;
}

export const NoteSliderContainer = styled.div`
  width: 100%;
  height: 6%;
  border-radius: 10px;
  align-self: center;
  display: flex;
  flex-shrink: 0;
  gap: 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${Colors.White};
`;

export const ButtonContainer = styled.div<Props>`
  width: 45%;
  height: 85%;
  border: 1px solid white;
  border-radius: 20px;
  background-color: ${({ activated }) => (activated ? Colors.Blue : Colors.Gray)};
  border: 0;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${Typography.Paragraph2};
  color: ${({ activated }) => (activated ? Colors.White : Colors.Gray1)};
  transition: all ease 0.7s 0s;
`;

export const Buttons = styled.div`
  width: 60%;
  height: 70%;
  display: flex;
  self-align: center;
  justify-content: center;
  gap: 5px;
  background-color: ${Colors.Gray};
  border-radius: 25px;
`;

export const SvgContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${Colors.Gray};
  }
  &:active {
    background-color: ${Colors.Gray0};
  }
`;
