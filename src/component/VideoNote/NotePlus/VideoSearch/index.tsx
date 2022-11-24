import { GrClose } from '@react-icons/all-files/gr/GrClose';
import { IoClipboardOutline } from '@react-icons/all-files/io5/IoClipboardOutline';
import { FiSearch } from '@react-icons/all-files/fi/FiSearch';

import {
  VideoSearchContainer,
  SearchTitleContainer,
  SearchTitle,
  SearchInputContainer,
  SearchInput,
  SearchResultContainer,
  EmptyContentContainer,
  ResultContentContainer,
} from './style';
import { NOTE_PLUS_TYPE } from '@/util/Constant';
import { useState } from 'react';

interface Props {
  setNotePlusType: React.Dispatch<React.SetStateAction<number>>;
}

interface ContentProps {
  text: string;
}

const EmptyContent: React.FC = () => {
  return (
    <EmptyContentContainer>
      <IoClipboardOutline size={40} color="#333333" />
      <span>검색 결과가 없습니다.</span>
    </EmptyContentContainer>
  );
};

const ResultContent: React.FC<ContentProps> = ({ text }: ContentProps) => {
  return <ResultContentContainer>{text}</ResultContentContainer>;
};

const VideoSearch: React.FC<Props> = ({ setNotePlusType }: Props) => {
  const testText: string[] = ['그렇다~', '알고싶지 ', '하하하', '호호'];
  const [input, setInput] = useState<string>('ㅎ');

  return (
    <VideoSearchContainer>
      <SearchTitleContainer>
        <SearchTitle>
          <h4>스마트 검색</h4>
          <GrClose size={16} onClick={() => setNotePlusType(NOTE_PLUS_TYPE.DEFAULT)} />
        </SearchTitle>
      </SearchTitleContainer>
      <SearchInputContainer>
        <SearchInput
          placeholder="검색어를 입력해주세요"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <FiSearch size={20} />
      </SearchInputContainer>
      <SearchResultContainer isEmpty={input.length === 0}>
        {input.length === 0 ? (
          <EmptyContent />
        ) : (
          testText.map((cur, idx) => <ResultContent text={cur} key={idx} />)
        )}
      </SearchResultContainer>
    </VideoSearchContainer>
  );
};

export default VideoSearch;
