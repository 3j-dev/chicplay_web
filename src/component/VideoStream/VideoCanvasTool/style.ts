import styled from 'styled-components';
import { NOTE_TYPE } from '@/util/Constant';

interface VideoCanvasToolContainerProps {
  noteType: number;
}

export const VideoCanvasToolContainer = styled.div<VideoCanvasToolContainerProps>`
  display: ${({ noteType }) => (noteType !== NOTE_TYPE.SCREEN_CANVAS ? 'none' : 'flex')};
  width: 10%;
  background-color: beige;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
