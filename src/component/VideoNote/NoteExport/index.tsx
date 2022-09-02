import { BsBoxArrowRight } from 'react-icons/bs';

import { NoteExportContainer } from './style';

const NoteExport: React.FC = () => {
  return (
    <NoteExportContainer>
      노트 내보내기 <BsBoxArrowRight />
    </NoteExportContainer>
  );
};

export default NoteExport;
