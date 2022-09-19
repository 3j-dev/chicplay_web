import { Colors } from '@/util/Constant';
import styled from 'styled-components';

interface VideoCanvasToolContainerProps {
  canvasActivated: boolean;
}

export const VideoCanvasToolContainer = styled.div<VideoCanvasToolContainerProps>`
  display: ${({ canvasActivated }) => (canvasActivated ? 'flex' : 'none')};
  width: 89%;
  height: 20%;
  align-self: center;
  background-color: ${Colors.Black2};
  position: absolute;
  bottom: 11%;
  border-radius: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 101;
`;

export const VideoCanvasToolBar = styled.div`
  width: 100%;
  height: 23%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  svg {
    cursor: pointer;
  }
`;

export const VideoCanvasTitle = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 2%;
  color: white;
  svg {
    cursor: pointer;
  }
`;

export const VideoCanvasText = styled.span`
  font-size: 14px;
  margin-left: 7%;
`;

export const VideoCanvasTools = styled.div`
  margin-left: -5%;
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const VideoCanvasMinimize = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.Gray2};
  margin-right: 2%;
  transition: ease all 0.5s;
`;

export const VideoVisualIndexing = styled.div`
  width: 97%;
  height: 77%;
  margin-bottom: 1%;
  display: flex;
  justify-content: flex-start;
  background-color: transparent;
  padding: 0 !important;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const VideoSnapImageContainer = styled.div`
  width: 13%;
  height: 58%;
  display: flex;
`;

export const VideoSnapImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  position: relative;
`;

export const VideoSnapTime = styled.div`
  position: absolute;
  bottom: 3%;
  right: 3%;
  background-color: ${Colors.Black};
  color: ${Colors.White};
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
