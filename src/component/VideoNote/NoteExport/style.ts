import styled from 'styled-components';

import { Typography } from '@/styles/style';
import { Colors } from '@/styles/color';

export const NoteExportContainer = styled.div`
  width: 47%;
  height: 4.5%;
  position: absolute;
  bottom: 0;
  margin-bottom: 3%;
  ${Typography.Paragraph2};
  color: ${Colors.White};
  background-color: ${Colors.Blue};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  box-shadow: 0px 0px 10px 7px ${Colors.Gray0};
  cursor: pointer;
  z-index: 1;
`;
