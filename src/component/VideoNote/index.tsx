import CanvasNote from './CanvasNote';
import MarkdownNote from './MarkdownNote';
import NoteSlider from './NoteSlider';

import { VideoNoteContainer } from './style';

interface NoteProps {
  setSnapShotClicked: React.Dispatch<React.SetStateAction<boolean>>;
  snapShotURL: string;
  noteType: number;
  setNoteType: React.Dispatch<React.SetStateAction<number>>;
}

const VideoNote: React.FC<NoteProps> = ({
  setSnapShotClicked,
  snapShotURL,
  noteType,
  setNoteType,
}: NoteProps) => {
  return (
    <VideoNoteContainer>
      <NoteSlider setNowNoteType={setNoteType} nowNoteType={noteType} />
      <MarkdownNote
        setSnapShotClicked={setSnapShotClicked}
        snapShotURL={snapShotURL}
        nowNoteType={noteType}
      />
      <CanvasNote nowNoteType={noteType} />
    </VideoNoteContainer>
  );
};

export default VideoNote;
