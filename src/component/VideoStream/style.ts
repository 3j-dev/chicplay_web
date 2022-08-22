import { Colors } from '@/util/Constant';
import styled from 'styled-components';

export const VideoStreamContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.Gray};
`;

export const Video = styled.div`
  position: relative;
  width: 100%;
`;
