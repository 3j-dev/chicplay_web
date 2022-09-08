import { NOTE_PLUS_TYPE } from '@/util/Constant';

import { NotePlusContainer } from './style';
import NoteRecord from './NoteRecord';
import VideoSearch from './VideoSearch';

interface Props {
  notePlusType: number;
  setNotePlusType: React.Dispatch<React.SetStateAction<number>>;
}

const NotePlus: React.FC<Props> = ({ notePlusType, setNotePlusType }: Props) => {
  console.log(notePlusType);
  return (
    <NotePlusContainer activated={notePlusType !== NOTE_PLUS_TYPE.DEFAULT}>
      {notePlusType === NOTE_PLUS_TYPE.RECORD ? (
        <NoteRecord setNotePlusType={setNotePlusType} />
      ) : (
        <VideoSearch setNotePlusType={setNotePlusType} />
      )}
    </NotePlusContainer>
  );
};

export default NotePlus;
