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
  align-self: center;
  position: relative;
  width: 92%;
  height: 87.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  video {
    border-radius: 10px;
  }
`;
