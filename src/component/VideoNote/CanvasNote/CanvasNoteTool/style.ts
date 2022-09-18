import styled from 'styled-components';

import { Colors } from '@/util/Constant';

export const CanvasNoteToolContainer = styled.div<{ isTransparent: boolean }>`
  width: 100%;
  height: auto;
  @media (min-width: 1384px) {
    height: 6%;
  }
  @media (max-width: 1384px) {
    height: 11%;
  }
  background-color: ${({ isTransparent }) => (isTransparent ? Colors.Gray0 : Colors.Transparent)};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  z-index: 999;
  transition: all ease 0.5s;
`;

export const CanvasNoteTools = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  margin: 0 17px 0 12px;
  svg {
    margin: 7px 6px;
    transition: all ease 0.5s;
  }
`;
