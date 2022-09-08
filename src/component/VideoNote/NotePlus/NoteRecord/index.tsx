import { BsXLg } from 'react-icons/bs';

import {
  NoteRecordContainer,
  RecordTitleContainer,
  RecordTitle,
  RecordContentContainer,
  ContentContainer,
} from './style';
import { NOTE_PLUS_TYPE } from '@/util/Constant';

interface Props {
  setNotePlusType: React.Dispatch<React.SetStateAction<number>>;
}

interface ContentProps {
  text: string;
}

const RecordContent: React.FC<ContentProps> = ({ text }: ContentProps) => {
  return <ContentContainer>{text}</ContentContainer>;
};

const NoteRecord: React.FC<Props> = ({ setNotePlusType }: Props) => {
  const testText: string[] = [
    '1강. 포켓몬 환경의 이해',
    '2강. 포켓몬 마스터 개론',
    '3강. 포켓몬 종자',
    '4강. 포켓몬 마스터의 길',
    '5강. 하이마트 포켓몬의 품질',
    '6강. 롯데마트 포켓몬의 품격',
  ];
  return (
    <NoteRecordContainer>
      <RecordTitleContainer>
        <RecordTitle>
          <h4>MY 필기 기록</h4>
          <BsXLg size={16} onClick={() => setNotePlusType(NOTE_PLUS_TYPE.DEFAULT)} />
        </RecordTitle>
      </RecordTitleContainer>
      <RecordContentContainer>
        {testText.map((cur, idx) => (
          <RecordContent text={cur} key={idx} />
        ))}
      </RecordContentContainer>
    </NoteRecordContainer>
  );
};

export default NoteRecord;
