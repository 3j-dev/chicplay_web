import { Colors } from '@/util/Constant';
import styled from 'styled-components';

interface Props {
  videoPercent: number;
}

export const VideoControlContainer = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const VideoControlBarContainer = styled.div`
  width: 100%;
  height: 8%;
  background-color: ${Colors.Gray2};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

export const VideoControlBar = styled.div<Props>`
  width: ${({ videoPercent }) => `${videoPercent}%`};
  height: 100%;
  background-color: ${Colors.Blue};
`;

export const VideoControlInput = styled.input`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: transparent;
  -webkit-appearance: none;
  border-radius: 0px;
  &::-webkit-slider-thumb {
    color: ${Colors.Blue};
  }
`;

export const VideoControlBottom = styled.div`
  width: 100%;
  height: 92%;
  background-color: ${Colors.Black1};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${Colors.White};
  gap: 10px;
  svg {
    cursor: pointer;
  }
`;

export const VideoControlLeft = styled.div`
  margin-left: 1%;
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const VideoControlRight = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const VideoControlTime = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VideoNowTime = styled.span`
  font-size: 16px;
  color: ${Colors.White};
  margin-right: 3%;
`;

export const VideoTotalTime = styled.span`
  font-size: 16px;
  color: ${Colors.Gray1};
`;
