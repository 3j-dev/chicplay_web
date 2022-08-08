import { NoteSliderContainer, ButtonContainer } from './style';
import { NOTE_TYPE } from '@/util/Constant';

interface Props {
  setNowNoteType: React.Dispatch<React.SetStateAction<number>>;
}

const NoteSlider: React.FC<Props> = ({ setNowNoteType }: Props) => {
  return (
    <NoteSliderContainer>
      <ButtonContainer onClick={() => setNowNoteType(NOTE_TYPE.MARKDOWN)}>Markdown</ButtonContainer>
      <ButtonContainer onClick={() => setNowNoteType(NOTE_TYPE.CANVAS)}>Canvas</ButtonContainer>
      <ButtonContainer onClick={() => setNowNoteType(NOTE_TYPE.SCREEN_CANVAS)}>
        Canvas On Screen
      </ButtonContainer>
    </NoteSliderContainer>
  );
};

export default NoteSlider;
