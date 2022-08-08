import styled from 'styled-components';

import { NOTE_TYPE } from '@/util/Constant';

interface FroalaContainerProps {
  nowNoteType: number;
}

export const FroalaContainer = styled.div<FroalaContainerProps>`
  width: 100%;
  display: ${({ nowNoteType }) => (nowNoteType === NOTE_TYPE.MARKDOWN ? 'flex' : 'none')};
  flex-direction: column;
  align-self: center;
`;
