import styled from 'styled-components';

import { Colors } from '@/styles/color';

interface Props {
  isTransparent: boolean;
  isInCanvasNote?: boolean;
}

export const CanvasNoteToolContainer = styled.div<Props>`
  width: 100%;
  height: ${({ isInCanvasNote }) => (isInCanvasNote ? '40px' : '28px')};
  background-color: ${({ isTransparent }) => (isTransparent ? Colors.Gray0 : Colors.Gray1)};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: ${({ isInCanvasNote }) => (isInCanvasNote ? '0' : '8px')};
  z-index: 999;
  transition: all ease 0.5s;
`;

export const CanvasNoteTools = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px 0 12px;
  svg {
    margin: 7px 4px;
    transition: all ease 0.5s;
  }
`;
