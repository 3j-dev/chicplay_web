import { useState } from 'react';

import CanvasNote from './CanvasNote';
import MarkdownNote from './MarkdownNote';
import NoteSlider from './NoteSlider';

import { VideoNoteContainer } from './style';
import { NOTE_TYPE } from '@/util/Constant';

interface NoteProps {
  setSnapShotClicked: React.Dispatch<React.SetStateAction<boolean>>;
  snapShotURL: string;
}

const VideoNote: React.FC<NoteProps> = ({ setSnapShotClicked, snapShotURL }: NoteProps) => {
  const [noteType, setNoteType] = useState<number>(NOTE_TYPE.MARKDOWN);

  return (
    <VideoNoteContainer>
      <MarkdownNote
        setSnapShotClicked={setSnapShotClicked}
        snapShotURL={snapShotURL}
        nowNoteType={noteType}
      />
      <CanvasNote nowNoteType={noteType} />
      <NoteSlider setNowNoteType={setNoteType} />
    </VideoNoteContainer>
  );
};

export default VideoNote;
