import { VideoNoteContainer } from './style';
import CanvasNote from './CanvasNote';
import MarkdownNote from './MarkdownNote';

interface NoteProps {
  setSnapShotClicked: React.Dispatch<React.SetStateAction<boolean>>;
  snapShotURL: string;
}

const VideoNote: React.FC<NoteProps> = ({ setSnapShotClicked, snapShotURL }: NoteProps) => {
  return (
    <VideoNoteContainer>
      <MarkdownNote setSnapShotClicked={setSnapShotClicked} snapShotURL={snapShotURL} />
      <CanvasNote />
    </VideoNoteContainer>
  );
};

export default VideoNote;
