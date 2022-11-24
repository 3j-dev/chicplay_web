import { IoLogOutOutline } from '@react-icons/all-files/io5/IoLogOutOutline';

import { NoteExportContainer } from './style';

interface Props {
  setExportClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const NoteExport: React.FC<Props> = ({ setExportClicked }: Props) => {
  return (
    <NoteExportContainer onClick={() => setExportClicked(true)}>
      노트 내보내기 <IoLogOutOutline size={20} />
    </NoteExportContainer>
  );
};

export default NoteExport;
