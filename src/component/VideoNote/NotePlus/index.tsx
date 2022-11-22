import { NOTE_PLUS_TYPE } from '@/util/Constant';

import { NotePlusContainer } from './style';
import NoteRecord from './NoteRecord';
import VideoSearch from './VideoSearch';

interface Props {
  notePlusType: number;
  setNotePlusType: React.Dispatch<React.SetStateAction<number>>;
  individualVideoId: string;
}

const NotePlus: React.FC<Props> = ({ notePlusType, setNotePlusType, individualVideoId }: Props) => {
  return (
    <NotePlusContainer activated={notePlusType !== NOTE_PLUS_TYPE.DEFAULT}>
      {notePlusType === NOTE_PLUS_TYPE.RECORD ? (
        <NoteRecord setNotePlusType={setNotePlusType} individualVideoId={individualVideoId} />
      ) : (
        <VideoSearch setNotePlusType={setNotePlusType} />
      )}
    </NotePlusContainer>
  );
};

export default NotePlus;
