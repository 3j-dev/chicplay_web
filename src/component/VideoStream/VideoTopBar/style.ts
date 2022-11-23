import styled from 'styled-components';

export const VideoTopBarContainer = styled.div`
  width: 100%;
  height: 6%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const VideoTopBarLeft = styled.div`
  width: 80%;
  height: 100%;
  margin-left: 3%;
  margin-top: 1%;
  gap: 10px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  overflow: auto;
`;

export const VideoTopBarRight = styled.div`
  justify-self: flex-end;
  width: 6%;
  height: 100%;
  display: flex;
  align-items: center;
`;
