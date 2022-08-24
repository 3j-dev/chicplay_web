import styled from 'styled-components';

interface VideoCanvasToolContainerProps {
  canvasActivated: boolean;
}

export const VideoCanvasToolContainer = styled.div<VideoCanvasToolContainerProps>`
  display: ${({ canvasActivated }) => (canvasActivated ? 'flex' : 'none')};
  width: 10%;
  background-color: beige;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
