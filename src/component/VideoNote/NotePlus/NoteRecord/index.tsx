import { BsXLg } from 'react-icons/bs';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';

import {
  NoteRecordContainer,
  RecordTitleContainer,
  RecordTitle,
  RecordContentContainer,
  ContentContainer,
} from './style';
import { NOTE_PLUS_TYPE } from '@/util/Constant';
import { useLayoutEffect, useState } from 'react';
import { TextMemoT } from '@/interfaces/stream';
import { getNoteList } from '@/api/stream';

interface Props {
  setNotePlusType: React.Dispatch<React.SetStateAction<number>>;
  individualVideoId: string;
}

interface ContentProps {
  text: string;
}

const RecordContent: React.FC<ContentProps> = ({ text }: ContentProps) => {
  return <ContentContainer>{text}</ContentContainer>;
};
//onClick markdownNote change handler 추가

const NoteRecord: React.FC<Props> = ({ setNotePlusType, individualVideoId }: Props) => {
  const [noteList, setNoteList] = useState<TextMemoT[]>([]);

  useLayoutEffect(() => {
    getNoteList(individualVideoId).then((res) => setNoteList(res.data));
  }, [individualVideoId]);

  return (
    <NoteRecordContainer>
      <RecordTitleContainer>
        <RecordTitle>
          <h4>MY 필기 기록</h4>
          <BsXLg size={16} onClick={() => setNotePlusType(NOTE_PLUS_TYPE.DEFAULT)} />
        </RecordTitle>
      </RecordTitleContainer>
      <RecordContentContainer>
        {noteList.map((note, idx) => (
          <RecordContent text={format(parseISO(note.createdAt), 'yyyy.MM.dd')} key={idx} />
        ))}
      </RecordContentContainer>
    </NoteRecordContainer>
  );
};

export default NoteRecord;
