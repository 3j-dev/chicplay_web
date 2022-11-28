import styled from 'styled-components';

import { Colors } from '@/styles/color';
import { Typography } from '@/styles/style';

interface Props {
  activated: boolean;
}

export const DropdownContainer = styled.div<Props>`
  width: 40%;
  height: 17%;
  position: absolute;
  top: 6%;
  right: 5%;
  display: ${({ activated }) => (!activated ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.White};
  border-radius: 10px;
  z-index: 9999;
  box-shadow: 0px 8px 10px 1px ${Colors.Gray0}, 0px 3px 14px 2px ${Colors.Gray0},
    0px 5px 5px -3px ${Colors.Gray0};
`;

export const DropdownButtonContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Typography.Paragraph2};
  cursor: pointer;
  background-color: ${Colors.White};
  &:hover {
    background-color: ${Colors.Gray};
  }
`;
