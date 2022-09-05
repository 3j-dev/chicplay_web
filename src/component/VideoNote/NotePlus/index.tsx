import { NOTE_PLUS_TYPE } from '@/util/Constant';

import { NotePlusContainer } from './style';
import NoteRecord from './NoteRecord';
import VideoSearch from './VideoSearch';

interface Props {
  notePlusType: number;
}

const NotePlus: React.FC<Props> = ({ notePlusType }: Props) => {
  return (
    <NotePlusContainer activated={notePlusType !== NOTE_PLUS_TYPE.DEFAULT}>
      {notePlusType === NOTE_PLUS_TYPE.RECORD ? <NoteRecord /> : <VideoSearch />}
    </NotePlusContainer>
  );
};

export default NotePlus;
