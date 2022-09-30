import { Typography } from '@/styles/style';
import { Colors } from '@/util/Constant';
import styled from 'styled-components';

interface Props {
  isEmpty: boolean;
}

export const VideoSearchContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 3%;
  flex-shrink: 0;
  flex-grow: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchTitleContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.Gray0};
`;

export const SearchTitle = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
`;

export const SearchInputContainer = styled.div`
  width: 90%;
  height: 14%;
  margin-top: 2%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid ${Colors.Gray3};
  border-radius: 8px;
`;

export const SearchInput = styled.input`
  width: 80%;
  height: 90%;
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

export const SearchResultContainer = styled.div<Props>`
  width: 100%;
  height: 66%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  ${({ isEmpty }) => (isEmpty ? 'justify-content: center;' : '')};
  flex-shrink: 0;
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

export const EmptyContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${Colors.Gray1};
  svg {
    cursor: default !important;
    margin-bottom: 3%;
  }
  span {
    ${Typography.Paragraph1};
  }
`;

export const ResultContentContainer = styled.div`
  width: 85%;
  height: 35%;
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
