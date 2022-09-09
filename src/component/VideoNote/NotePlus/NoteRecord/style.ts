import { Colors } from '@/util/Constant';
import styled from 'styled-components';

export const NoteRecordContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RecordTitleContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.Gray0};
`;

export const RecordTitle = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RecordContentContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    display: hidden;
    background: ${Colors.Gray1};
    border-radius: 12px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent !important;
  }
`;

export const ContentContainer = styled.div`
  width: 85%;
  height: 30%;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${Colors.Blue2};
  }
`;
