import styled from 'styled-components';

import { NOTE_TYPE } from '../Constant';

interface CanvasNoteContainerProps {
  nowNoteType: number;
}

export const CanvasNoteContainer = styled.div<CanvasNoteContainerProps>`
  position: relative;
  width: 100%;
  height: 94%;
  align-self: center;
  display: ${({ nowNoteType }) => (nowNoteType === NOTE_TYPE.CANVAS ? 'flex' : 'none')};
  border-radius: 10px;

  & > div > span > div {
    background-color: transparent !important;
  }
`;
