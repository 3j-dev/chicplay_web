import styled from 'styled-components';

import { Colors } from '@/util/Constant';

interface Props {
  activated: boolean;
}

export const DropdownContainer = styled.div<Props>`
  width: 40%;
  height: 17%;
  position: absolute;
  top: 6.4%;
  right: 5%;
  display: ${({ activated }) => (!activated ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.White};
  border: 1px solid ${Colors.Gray3};
  border-radius: 10px;
  z-index: 9999;
  box-shadow: 0px 8px 10px 1px ${Colors.Gray0}, 0px 3px 14px 2px ${Colors.Gray0},
    0px 5px 5px -3px ${Colors.Gray0};
`;
