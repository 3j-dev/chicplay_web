import { BsBoxArrowRight } from 'react-icons/bs';

import { NoteExportContainer } from './style';

interface Props {
  setExportClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const NoteExport: React.FC<Props> = ({ setExportClicked }: Props) => {
  return (
    <NoteExportContainer onClick={() => setExportClicked(true)}>
      노트 내보내기 <BsBoxArrowRight />
    </NoteExportContainer>
  );
};

export default NoteExport;
