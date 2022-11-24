import styled from 'styled-components';

import { Colors } from '@/util/Constant';

export const CanvasNoteToolContainer = styled.div<{ isTransparent: boolean }>`
  width: 100%;
  height: 80%;
  background-color: ${({ isTransparent }) => (isTransparent ? Colors.Transparent : Colors.Gray1)};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 8px;
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
