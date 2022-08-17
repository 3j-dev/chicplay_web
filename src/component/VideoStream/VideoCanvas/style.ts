import styled from 'styled-components';

import { NOTE_TYPE } from '@/util/Constant';

interface VideoCanvasContainerProps {
  noteType: number;
}

export const VideoCanvasContainer = styled.div<VideoCanvasContainerProps>`
  display: ${({ noteType }) => noteType !== NOTE_TYPE.SCREEN_CANVAS && 'none'};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  & > div > span > div {
    background-color: transparent !important;
  }
`;
