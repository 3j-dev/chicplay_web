import { BsThreeDotsVertical, BsXLg } from 'react-icons/bs';

import { NoteSliderContainer, ButtonContainer, Buttons, SvgContainer } from './style';
import { NOTE_TYPE } from '@/util/Constant';

interface Props {
  nowNoteType: number;
  setNowNoteType: React.Dispatch<React.SetStateAction<number>>;
}

const NoteSlider: React.FC<Props> = ({ setNowNoteType, nowNoteType }: Props) => {
  return (
    <NoteSliderContainer>
      <SvgContainer>
        <BsXLg />
      </SvgContainer>
      <Buttons>
        <ButtonContainer
          onClick={() => setNowNoteType(NOTE_TYPE.MARKDOWN)}
          activated={nowNoteType === NOTE_TYPE.MARKDOWN}
        >
          텍스트
        </ButtonContainer>
        <ButtonContainer
          onClick={() => setNowNoteType(NOTE_TYPE.CANVAS)}
          activated={nowNoteType === NOTE_TYPE.CANVAS}
        >
          그리기
        </ButtonContainer>
      </Buttons>
      <SvgContainer>
        <BsThreeDotsVertical />
      </SvgContainer>
    </NoteSliderContainer>
  );
};

export default NoteSlider;
